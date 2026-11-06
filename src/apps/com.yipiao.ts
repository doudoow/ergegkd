// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智行火车票",
  "id": "com.yipiao",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20903066",
          "exampleUrls": "https://e.gkd.li/4bae84e9-357a-4cc9-a38b-c6949f5753cd"
        },
        {
          "matches": "[desc=\"广告素材\"][visibleToUser=true]",
          "excludeMatches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "position": {
            "left": "width * 0.8759",
            "top": "width * 2.0519"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16896514",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20903066",
          "exampleUrls": "https://e.gkd.li/375bf789-95f6-4646-b433-3d3b25dda58a"
        }
      ]
    },
    {
      "name": "更新提示-内测升级",
      "desc": "点击弹窗下方x",
      "enable": false,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text*=\"V\"] +2 ImageView[id=\"com.yipiao:id/arg\"][clickable=true][focusable=true]",
          "activityIds": "com.app.main.entrance.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13947144",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-添加桌面小组件",
      "desc": "点击横幅右上角x",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"去添加\"] + ImageView[id=\"com.yipiao:id/arg\"][clickable=true][focusable=true]",
          "activityIds": "com.app.main.entrance.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13947145",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-代金券",
      "desc": "点击横幅右上角x",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout > ImageView[id=\"com.yipiao:id/arg\"][clickable=true][focusable=true][width=53][height=53]",
          "activityIds": "com.app.main.entrance.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13947145",
          "key": 0
        }
      ]
    }
  ]
});
