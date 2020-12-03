const validator = {
  email: [v => !!v || '이메일 입력이 필요합니다.', v => /.+@.+/.test(v) || '유효한 이메일을 입력해주세요']
}

export default validator

export const isEmptyArray = v => !!v && Array.isArray(v) && v.length === 0
export const isEmptyString = v => typeof v === 'string' && v.length === 0
export const isLastIndex = (v, length) => typeof v === 'number' && v === length - 1
