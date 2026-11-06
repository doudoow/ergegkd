// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "纯纯打码",
  "id": "me.drakeet.puremosaic",
  "groups": [
    {
      "name": "全屏广告-解锁高级功能",
      "desc": "点击[不]",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"解锁高级功能\"]",
            "[text=\"不\"]"
          ],
          "activityIds": [
            ".MainActivity",
            "me.iwf.photopicker.PhotoPickerActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16761630",
            "https://i.gkd.li/i/16761818"
          ],
          "key": 0
        }
      ]
    }
  ]
});
