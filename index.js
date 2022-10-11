const express = require("express")
const router = express.Router()
const { db, save } = require("../db.js")
router.use(express.static(__dirname + '/static'))

// #region
function addAuthView(url, view, provider, ...before) {
  return addView(url, view, provider, ...before, requiresAuth())
}
/**
 * @param {string} url
 * @param {string} view
 * @param {object | (req, res) => object} provider
 * @param {((req, res) => void)[]} before
 * @returns {void}
 */
function addView(url, view = url, provider = {}, ...before) {
  router.get(typeof url === 'string' ? '/' + url : url, before, (req, res) => {
    render(req, res, view, (typeof provider === 'function' ? provider(req, res) : provider))
  })
}
function render(req, res, view, settings) {
  res.render(`@chat/${view}.pug`, { ...req.params, req, res, db, ...settings })
}
// #endregion

addView('/', 'root')

module.exports = router