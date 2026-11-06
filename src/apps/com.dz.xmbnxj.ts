// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小卖部逆袭记",
  "id": "com.dz.xmbnxj",
  "groups": [
    {
      "name": "局部广告-底部卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.dz.xmbnxj:id/mix_img_close\"]",
          "activityIds": "com.lynx.boot.LynxActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13399232",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "key": 0
        },
        {
          "matches": "[vid=\"mix_img_close\"]",
          "activityIds": "com.lynx.boot.LynxActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13399232",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-底部卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.dz.xmbnxj:id/mix_img_close\"]",
          "activityIds": "com.lynx.boot.LynxActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13399232",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "key": 0
        }
      ]
    },
    {
      "name": "底部卡片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.dz.xmbnxj:id/mix_img_close\"]",
          "activityIds": "com.lynx.boot.LynxActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13399232",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "key": 0
        }
      ]
    }
  ]
});
