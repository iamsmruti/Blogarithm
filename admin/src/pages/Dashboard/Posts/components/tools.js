import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from 'simple-image-editorjs'
import Alert from 'editorjs-alert';
import InlineImage from 'editorjs-inline-image';
import CodeBox from '@bomdi/codebox';
import anyButton from 'editorjs-button'

export const EDITOR_TOOLS = {
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
        twitter: true,
        codepen: true,
        imgur: true,
        instagram: true
      }
    }
  },
  alert: Alert,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: CodeBox,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  image: SimpleImage, 
  embedImage: {
    class: InlineImage,
    inlineToolbar: true,
    config: {
      embed: {
        display: true,
      },
      unsplash: {
        appName: 'blogarithm',
        clientId: 'wk-Ul-pHeSKPjwFarDazo_wfuxCUiX_bJ6Xlx5iplww'
      }
    }
  }
}
