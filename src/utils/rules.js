export const validatePass = (rule, value, callback) => {
  console.log('validatePass', value, 'value')
  if (value.length < 6) {
    callback(new Error('密码至少为6位'))
  } else {
    callback()
  }
}
