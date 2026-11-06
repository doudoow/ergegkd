// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "闪动校园",
  "id": "com.huachenjie.shandong_school",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<80 && height<80] - [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.zj.zjdsp.ad.AdActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24258941",
          "exampleUrls": "https://e.gkd.li/39f264fa-ea75-4259-b8ed-672e7ec0974d"
        },
        {
          "matches": "@[id=\"com.zj.zk.wm.allmodules:id/wm_pop_pic_close\"] +2 LinearLayout > [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".home.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24258935",
          "exampleUrls": "https://e.gkd.li/328ebf29-ec1e-469a-84b0-c6b255a74b48"
        }
      ]
    }
  ]
});
