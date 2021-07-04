import nuxtConfig from '@dword-design/base-config-app/dist/nuxt.config'
import { property } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt'
import axios from 'axios'
import pretty from 'pretty'

export default tester(
  {
    async init() {
      expect(
        axios.get('http://localhost:3000/feed')
          |> await
          |> property('data')
          |> pretty
      ).toMatchSnapshot(this)
    },
  },
  [testerPluginNuxt(nuxtConfig)]
)
