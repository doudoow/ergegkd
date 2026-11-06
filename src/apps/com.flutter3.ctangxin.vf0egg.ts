// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "糖心Vlog",
  "id": "com.flutter3.ctangxin.vf0egg",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionCd": 100,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/12836891",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"公告\"] +2 [desc=\"取消\"][clickable=true]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/12836854",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "desc": "虚假按钮，实际点击无法跳过，规则暂时保留",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > View > View > View > View > @View[clickable=true && desc.length=2] + ImageView[childCount=1]",
          "snapshotUrls": "https://i.gkd.li/import/12836857",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionCd": 100,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/12836891",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-延迟工具(协助key1、2)",
      "desc": "5s开屏广告后主动触发匹配",
      "enable": false,
      "matchTime": 10000,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "TextView[text=\"xxxxx\"]",
          "key": 0
        }
      ]
    }
  ]
});
