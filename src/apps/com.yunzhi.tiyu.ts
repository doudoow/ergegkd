// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云运动",
  "id": "com.yunzhi.tiyu",
  "groups": [
    {
      "name": "分段广告-首页卡片广告",
      "desc": "点击关闭-点击[不感兴趣]",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80&&height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text=\"广告\"] <<n [vid=\"viewAd\" || vid=\"fl_flow_content\"]",
          "activityIds": "com.yunzhi.tiyu.module.MainActivity",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/14428780",
            "https://i.gkd.li/i/14428777",
            "https://i.gkd.li/i/14446375"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/369a65c8-4207-441b-a20d-2f5e402ea983"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "activityIds": "com.yunzhi.tiyu.module.MainActivity",
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/14446216",
          "exampleUrls": "https://m.gkd.li/57941037/1e5bff7e-b82b-458e-9179-364e6bf2c1da"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80&&height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text=\"广告\"] <<n [vid=\"viewAd\" || vid=\"fl_flow_content\"]",
          "activityIds": ".module.MainActivity",
          "key": 2,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/14428780",
            "https://i.gkd.li/i/14428777",
            "https://i.gkd.li/i/14446375"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/369a65c8-4207-441b-a20d-2f5e402ea983"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "activityIds": ".module.MainActivity",
          "key": 3,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/14446216",
          "exampleUrls": "https://m.gkd.li/57941037/1e5bff7e-b82b-458e-9179-364e6bf2c1da"
        }
      ]
    }
  ]
});
