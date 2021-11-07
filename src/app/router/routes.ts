export const routes = [
  require('pages/home/routes').route,
  require('pages/authentication/login/routes').route,
  require('pages/authentication/register/routes').route,
  require('pages/authentication/password/routes').route,
  require('pages/patients/core/form/routes').route,
  require('pages/patients/core/list/routes').route,
  require('pages/patients/assets/routes').route,
  require('pages/patients/interactions/routes').route,
  require('pages/patients/studies/routes').route,
  require('pages/assets/routes').route,
  require('pages/audits/routes').route,
]
