// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "流舟文件",
  "id": "com.liuzho.file.explorer",
  "groups": [
    {
      "name": "全屏广告-升级pro弹窗",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"关闭\"] < @View[clickable=true] <2 View < ScrollView < View < View <2 View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": ".DocumentsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27544788",
          "exampleUrls": "https://e.gkd.li/67d6d50b-73fa-488f-8fe3-512cf353f6af",
          "key": 0
        }
      ]
    }
  ]
});
