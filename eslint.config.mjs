import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    vueVersion: 2,
    sfcBlocks: false,
  },
  rules: {
    'no-console': ['off'],
    'no-alert': ['off'],
  },
})
