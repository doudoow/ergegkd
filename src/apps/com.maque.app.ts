// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "麻雀省钱",
  "id": "com.maque.app",
  "groups": [
    {
      "name": "全屏广告-首页活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "snapshotUrls": "https://i.gkd.li/i/12640100",
          "key": 0
        },
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页活动弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页活动弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "key": 0
        }
      ]
    }
  ]
});
