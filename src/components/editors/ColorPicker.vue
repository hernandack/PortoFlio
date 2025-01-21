<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import * as eva from 'eva-icons'
import { useEditorStore } from '@/stores/editor'
import { usePortfolioStore } from '@/stores/portfolio'

const canvas = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const isPicking = ref(false)
const canvasSize = 250
const editorStore = useEditorStore()
const portfolioStore = usePortfolioStore()

const color = reactive({
  r: 255,
  g: 255,
  b: 255,
  a: 1,
})
const palettes = ref<string[]>([])

const hex = computed({
  get: () => `#${((1 << 24) | (color.r << 16) | (color.g << 8) | color.b).toString(16).slice(1)}`,
  set: (value) => {
    const match = value.match(/^#?([a-fA-F0-9]{6})$/)
    if (match) {
      const bigint = parseInt(match[1], 16)
      color.r = (bigint >> 16) & 255
      color.g = (bigint >> 8) & 255
      color.b = bigint & 255
    }
  },
})

const indicatorStyle = computed(() => {
  const x = (color.r / 255) * canvasSize
  const y = (1 - color.g / 255) * canvasSize
  return {
    left: `${x}px`,
    top: `${y}px`,
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  }
})

const drawCanvas = () => {
  if (!ctx.value || !canvas.value) return

  const gradientX = ctx.value.createLinearGradient(0, 0, canvasSize, 0)
  gradientX.addColorStop(0, 'rgb(255, 0, 0)')
  gradientX.addColorStop(0.17, 'rgb(255, 255, 0)')
  gradientX.addColorStop(0.33, 'rgb(0, 255, 0)')
  gradientX.addColorStop(0.5, 'rgb(0, 255, 255)')
  gradientX.addColorStop(0.67, 'rgb(0, 0, 255)')
  gradientX.addColorStop(0.83, 'rgb(255, 0, 255)')
  gradientX.addColorStop(1, 'rgb(255, 0, 0)')

  ctx.value.fillStyle = gradientX
  ctx.value.fillRect(0, 0, canvasSize, canvasSize)

  const gradientY = ctx.value.createLinearGradient(0, 0, 0, canvasSize)
  gradientY.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradientY.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
  gradientY.addColorStop(1, 'rgba(0, 0, 0, 1)')

  ctx.value.fillStyle = gradientY
  ctx.value.fillRect(0, 0, canvasSize, canvasSize)
}

const startPicking = (event: MouseEvent) => {
  isPicking.value = true
  pickColor(event)
}

const pickColor = (event: MouseEvent) => {
  if (!isPicking.value || !canvas.value || !ctx.value) return
  const rect = canvas.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(event.clientX - rect.left, canvasSize - 1))
  const y = Math.max(0, Math.min(event.clientY - rect.top, canvasSize - 1))

  // Get the color at the given position
  const pixel = ctx.value.getImageData(x, y, 1, 1).data
  color.r = pixel[0]
  color.g = pixel[1]
  color.b = pixel[2]
  color.a = parseFloat((pixel[3] / 255).toFixed(2)) // Normalize alpha

  updateIndicatorPosition(x, y)

  // update the color theme
  // when user click the color, get the TYPE of current active section
  // based on the target "text" or "background", set the css variables
  if (portfolioStore.isEditing) {
    if (editorStore.activeSection) {
      const newStyle = `--${editorStore.activeSection.type}-${editorStore.activeThemeTarget === 'text' ? 'color' : 'bgcolor'}`
      portfolioStore.updateStyles(newStyle, hex.value)
    }
  }
}

const updateIndicatorPosition = (x: number, y: number) => {
  indicatorStyle.value.left = `${x}px`
  indicatorStyle.value.top = `${y}px`
}

const stopPicking = () => {
  isPicking.value = false
}

const updateColorFromHex = () => {
  hex.value = hex.value // Trigger the setter for computed hex
}

const handleSavePalette = () => {
  palettes.value.push(hex.value)
}
const handleRemovePalette = (index: number) => {
  palettes.value.splice(index, 1)
}

onMounted(() => {
  eva.replace()
  if (canvas.value) {
    canvas.value.width = canvasSize
    canvas.value.height = canvasSize
    ctx.value = canvas.value.getContext('2d')
    drawCanvas()
  }
})
</script>

<template>
  <div class="color-picker">
    <canvas
      ref="canvas"
      @mousedown="startPicking"
      @mousemove="pickColor"
      @mouseup="stopPicking"
      @mouseleave="stopPicking"
    ></canvas>
    <div class="controls">
      <div class="rgba-inputs text-gray-600">
        <label>
          <span>R</span>
          <input type="number" v-model.number="color.r" min="0" max="255" />
        </label>
        <label>
          <span>G</span>
          <input type="number" v-model.number="color.g" min="0" max="255" />
        </label>
        <label>
          <span>B</span>
          <input type="number" v-model.number="color.b" min="0" max="255" />
        </label>
        <label>
          <span>A</span>
          <input type="number" v-model.number="color.a" min="0" max="1" step="0.01" />
        </label>
      </div>
      <div class="hex-input">
        <label>
          <span>HEX:</span>
          <input type="text" class="text-gray-600" v-model="hex" @input="updateColorFromHex" />
          <button
            class="hex-input__current relative cursor-pointer"
            :style="`background-color: ${hex}; color:white;`"
            @click="handleSavePalette"
          >
            <i
              data-eva="save"
              data-eva-width="16"
              data-eva-height="16"
              data-eva-fill="currentColor"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style="filter: drop-shadow(0px 2px 4px black)"
            ></i>
          </button>
        </label>
      </div>
      <div class="palettes grid grid-cols-6 gap-1">
        <h3 class="col-span-full uppercase text-sm">Palettes</h3>
        <template v-if="palettes.length">
          <span
            class="aspect-square w-full relative rounded-md border-2 border-white cursor-pointer"
            v-for="(pal, index) in palettes"
            :key="index"
            :style="`background-color: ${pal};`"
          >
            <button
              class="text-[10px] leading-1 bg-red-500 text-white rounded-full w-4 h-4 absolute -top-[0.5em] -right-[0.5em] flex justify-center items-center"
              @click="handleRemovePalette(index)"
            >
              <span class="-translate-y-[0.2em]">x</span>
            </button>
          </span>
        </template>
        <template v-else>
          <span class="col-span-full text-gray-300">No palettes saved</span>
        </template>
      </div>
    </div>
    <div class="indicator" :style="indicatorStyle"></div>
  </div>
</template>

<style scoped>
.color-picker {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  selection: none;
}

canvas {
  cursor: crosshair;
  border: 0;
  width: 100%;
  box-sizing: border-box;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 16px 16px;
}
.rgba-inputs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #a3a4a5;
}
.rgba-inputs label,
.controls label {
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
}
.rgba-inputs label {
  flex-direction: column;
  align-items: start;
}
.rgba-inputs span {
  order: 2;
  text-align: center;
  width: 100%;
}
.rgba-inputs input {
  width: 100%;
  font-size: 12px;
  padding: 5px;
  order: 1;
  text-align: center;
  border-radius: 4px;
  color: #353535;
  appearance: none;
}
.hex-input {
  border-bottom: 1px solid #a3a4a5;
  padding-bottom: 16px;
}
.hex-input label {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}
.hex-input span {
  flex: 1 0 auto;
}
.hex-input input {
  width: 100%;
  flex: 1 1 auto;
  padding: 5px;
  border-radius: 4px;
  color: #353535;
}
.hex-input__current {
  width: 34px;
  height: 34px;
  flex: 1 0 auto;
  border-radius: 4px;
  border: 3px solid white;
}

.indicator {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
