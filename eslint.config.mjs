import antfu from '@antfu/eslint-config'

export default antfu({
  vue: { vueVersion: 2 },
  rules: {
    'no-console': ['off'],
    'no-alert': ['off'],
  },
})
