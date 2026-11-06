// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "热剧猫",
  "id": "com.tuying.kuimg.rjm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "com.tuying.kuimg.rjm.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13166088"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.tuying.kuimg.rjm.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13166086"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13166088"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13166086"
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13166088"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13166086"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13166088"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13166086"
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13166088"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13166086"
        }
      ]
    }
  ]
});
