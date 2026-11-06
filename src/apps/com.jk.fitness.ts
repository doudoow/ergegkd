// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "食卡卡",
  "id": "com.jk.fitness",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "子key2会点击假的[跳过]按钮进入广告,需配合下一条规则使用",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0
        },
        {
          "matches": "@ImageView < [width<137 && height<137] < [visibleToUser=true] +n ViewGroup >2 [text=\"广告\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/28437892",
            "https://i.gkd.li/i/28447272"
          ]
        },
        {
          "matches": "TextView - @View[id=null][text=null][desc=null][clickable=true][width<148 && height<148] <3 FrameLayout[childCount=4] <<n [id=\"android:id/content\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/28448877"
        }
      ]
    },
    {
      "name": "其他-开屏误触后的返回操作",
      "desc": "配合开屏广告规则使用",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Button[desc=\"返回\"] < View < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "preKeys": [
            2
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/29038524"
        },
        {
          "matches": "[desc*=\"会员\"] -n @ImageView[clickable=true][width<157] <3 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/31331586"
        },
        {
          "matches": "@ImageView[clickable=true] <2 View < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/29038568"
        }
      ]
    },
    {
      "name": "全屏广告-获取设备",
      "desc": "获取AI体脂秤-> 暂不",
      "matchTime": 14000,
      "key": 2,
      "rules": [
        {
          "matches": "@View[desc=\"暂不\"][clickable=true][visibleToUser=true] -2 ImageView < View[childCount=3][left=0 && top=0] <<(6-n) FrameLayout <<(4-n) [id=\"android:id/content\"]",
          "activityIds": "com.jk.fitness.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30460157",
          "exampleUrls": "https://e.gkd.li/82711399-cc15-4cab-acc2-f6d359b9d349",
          "key": 0
        }
      ]
    }
  ]
});
