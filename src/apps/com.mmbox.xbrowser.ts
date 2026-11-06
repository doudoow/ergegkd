// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "X浏览器",
  "id": "com.mmbox.xbrowser",
  "groups": [
    {
      "name": "功能类-自动允许打开外部App",
      "desc": "是否允许打开外部应用? -> 允许",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"message_bar\"][childCount=2] > [text=\"是否允许打开外部应用?\"][visibleToUser=true] + [text=\"允许\"][clickable=true]",
          "activityIds": ".BrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34007323",
          "exampleUrls": "https://e.gkd.li/402beb6f-6777-423c-9db1-7f06ba46a034",
          "key": 0
        }
      ]
    }
  ]
});
