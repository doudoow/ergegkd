// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全球网测",
  "id": "com.cnspeedtest.globalspeed",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "desc": "点击[取消]",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"开启GPS权限\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": "com.ruili.android.taierspeed.main.WelcomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24012859",
          "exampleUrls": "https://e.gkd.li/f6668ec9-eac9-4728-9ab1-5c76ac4b1ef5",
          "key": 0
        }
      ]
    }
  ]
});
