import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

let Conf = [
    { languageOptions: { globals: globals.browser }, extends: ['prettier'] },
    pluginJs.configs.recommended,
    pluginReactConfig,
]

export default Conf
