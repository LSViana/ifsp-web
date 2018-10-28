<template>
    <v-icon @mouseover="mouseOver"
            @mouseout="mouseOut"
            :color="hoverColor"
            v-on="inputListeners">
        {{ icon }}
    </v-icon>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: 'dimgrey'
        },
        hover: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            hoverColor: this.color
        }
    },
    methods: {
        mouseOver() {
            this.hoverColor = this.hover;
        },
        mouseOut() {
            this.hoverColor = this.color;
        }
    },
    computed: {
        inputListeners() {
            return Object.assign({}, this.$listeners);
        }
    }
}
</script>

<style>

</style>
