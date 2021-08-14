export default {
  get: jest.fn().mockResolvedValue({ data: 'Did it' }),
  post: jest.fn().mockResolvedValue('Success post'),
}
