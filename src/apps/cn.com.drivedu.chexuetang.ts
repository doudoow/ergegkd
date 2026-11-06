// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "车学堂",
  "id": "cn.com.drivedu.chexuetang",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > @View[clickable=true][visibleToUser=true] <<n [vid=\"fragment_ad\"]",
          "activityIds": "cn.com.drivedu.chexuetang.main.activity.MainActivity_",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15137765",
          "exampleUrls": "https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9"
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true] <<n [vid=\"fragment_ad\"]",
          "activityIds": "cn.com.drivedu.chexuetang.main.activity.MainActivity_",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15148368",
          "exampleUrls": "https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d"
        },
        {
          "matches": "@[clickable=true][width<82] < [desc^=\"dislike\"] + * >2 [text=\"广告\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15137765",
          "exampleUrls": "https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9"
        },
        {
          "matches": "@[name$=\"View\"][width<72][height<72] < FrameLayout <3 FrameLayout <<(6,8) [vid=\"fragment_ad\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15148368",
          "exampleUrls": "https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d"
        }
      ]
    }
  ]
});
