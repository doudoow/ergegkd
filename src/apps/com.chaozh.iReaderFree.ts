// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌阅",
  "id": "com.chaozh.iReaderFree",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[name!$=\"ViewGroup\"] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23046697",
            "https://i.gkd.li/i/23186001"
          ],
          "exampleUrls": "https://e.gkd.li/84df4bd7-bdf9-4b34-bb3c-57dfe9c09454"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24635516"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"dialog_public_top_bar_title_close\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "snapshotUrls": "https://i.gkd.li/i/16549332",
          "key": 0
        }
      ]
    }
  ]
});
