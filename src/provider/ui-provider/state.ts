export const initialState = {
  drawer: { open: false },
  dialog: { open: false, data: {}, type: null },
  toast: { open: false, type: null, title: null, description: null },
  params: { page: 1, search: null },
  theme: 'dark',
}
