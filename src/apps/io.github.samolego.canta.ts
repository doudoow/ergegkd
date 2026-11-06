// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Canta",
  "id": "io.github.samolego.canta",
  "groups": [
    {
      "name": "其他-卸载应用后弹窗",
      "desc": "点击[取消]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"取消\"] < @[clickable=true] -2 [text^=\"您已成功卸载\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/28225422",
          "key": 0
        }
      ]
    }
  ]
});
