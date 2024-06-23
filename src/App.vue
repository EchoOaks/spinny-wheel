<template>
    <div style="margin: 20%;">

        <VueWheelSpinner ref="spinner" :slices="slices" :winner-index="defaultWinner" :sounds="sounds"
            :cursor-angle="cursorAngle" :cursor-position="cursorPosition" :cursor-distance="cursorDistance"
            @spin-start="onSpinStart" @spin-end="onSpinEnd">

            <!-- <template #cursor>
        <img class="cursor-img" :src="cursorImage" alt="Cursor">
      </template>
-->
            <!-- <template #default> -->
            <button class="spin-button" :disabled="isSpinning" @click="handleSpinButtonClick"
                @mouseover="handleSpinButtonHover" @mouseleave="handleSpinButtonLeave">
                Spin
            </button>
            <!-- </template> -->

        </VueWheelSpinner>

    </div>

</template>

<script>
import VueWheelSpinner from 'vue-wheel-spinner';

// import cursorImage from './assets/cursor.svg';
// import wonSound from './sounds/won.mp3';
// import clickSound from './sounds/click.mp3';
// import hoverSound from './sounds/hover.mp3';
// import leaveSound from './sounds/leave.mp3';
// import spinningSound from './sounds/spinning.mp3';

export default {
    components: {
        VueWheelSpinner
    },
    data() {
        return {
            winnerResult: null,
            slices: [
                { color: '#eb4d4b', text: 'Slice 1' },
                { color: '#f0932b', text: 'Slice 2' },
                { color: '#f9ca24', text: 'Slice 3' },
                { color: '#badc58', text: 'Slice 4' },
                { color: '#7ed6df', text: 'Slice 5' },
                { color: '#e056fd', text: 'Slice 6' }
            ],
            isSpinning: false,
            defaultWinner: 0,
            // sounds: {
            //   won: wonSound,
            //   spinButtonClick: clickSound,
            //   spinButtonHover: hoverSound,
            //   spinButtonLeave: leaveSound,
            //   spinning: spinningSound
            // },
            // cursorImage,
            cursorAngle: 0,
            cursorPosition: 'edge',
            cursorDistance: 0
        };
    },
    methods: {
        playAudio(audio) {
            if (audio) {
                audio.volume = 0.5
                // audio.play();
            }
        },
        handleSpinButtonClick() {
            if (this.buttonClickAudio) {
                // this.playAudio(this.buttonClickAudio)
            }
            this.$refs.spinner.spinWheel(this.defaultWinner);
        },
        handleSpinButtonHover() {
            if (this.buttonHoverAudio) {
                // this.playAudio(this.buttonHoverAudio)
            }
        },
        handleSpinButtonLeave() {
            if (this.buttonLeaveAudio) {
                // this.playAudio(this.buttonLeaveAudio)
            }
        },
        spinFor(index) {
            this.defaultWinner = index;
            this.$refs.spinner.spinWheel(index);
        },
        onSpinStart() {
            this.winnerResult = null;
            this.isSpinning = true;
        },
        onSpinEnd(winnerIndex) {
            this.isSpinning = false;
            this.winnerResult = this.slices[winnerIndex];
        }
    },
    mounted() {
        // this.buttonHoverAudio = new Audio(hoverSound);
        // this.buttonLeaveAudio = new Audio(leaveSound);
        // this.buttonClickAudio = new Audio(clickSound);
    }
};
</script>

<style>
.cursor-img {
    width: 20px;
    aspect-ratio: 1 / 1;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.19));
}

.spin-button {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    font-size: 20px;
    cursor: pointer;
    background: #eb4d4b;
    border-radius: 50%;
    transition: all 150ms;
    border: 3px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white !important;
    box-shadow: inset -3px -3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
    z-index: 11;
    position: relative;
    user-select: none;

    &:hover {
        box-shadow: inset -5px -5px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
    }

    &:active {
        box-shadow: inset 3px 3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
        pointer-events: none;
    }

}
</style>