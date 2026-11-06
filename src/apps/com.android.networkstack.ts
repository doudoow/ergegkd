// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网络管理器",
  "id": "com.android.networkstack",
  "groups": [
    {
      "name": "功能类-VIOV-取消关闭私人DNS",
      "desc": "无法连接网络关闭DNS? ->取消",
      "forcedTime": 6000,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"关闭私人 DNS\"] + [text=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/29376048",
          "exampleUrls": "https://e.gkd.li/f05c2fd6-264d-4134-bd47-9e3481a256ec",
          "key": 0
        }
      ]
    }
  ]
});
