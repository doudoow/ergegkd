// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "设置",
  "id": "com.android.settings",
  "groups": [
    {
      "name": "功能类-选默认USB连接方式",
      "desc": "(小米华为📱)点击[取消]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"USB 用于\" || text=\"USB 连接方式\"][visibleToUser=true]",
            "[text=\"取消\"][clickable=true]"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23428639",
            "https://i.gkd.li/i/23696166",
            "https://i.gkd.li/i/25351690",
            "https://i.gkd.li/i/25351689"
          ],
          "exampleUrls": "https://e.gkd.li/1ab102bd-99dd-471a-8841-33a7aaf2790a",
          "key": 0
        }
      ]
    }
  ]
});
