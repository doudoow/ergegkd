// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "应用商店",
  "id": "com.sec.android.app.samsungapps",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"skip\"][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/14810528",
            "https://i.gkd.li/i/18329468"
          ],
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "action": "clickCenter",
          "actionMaximum": 1,
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14810528"
        }
      ]
    },
    {
      "name": "其他-[您是否年满 18 岁？]弹窗",
      "desc": "点击[是]",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"您是否年满 18 岁？\"] +4 @[clickable=true] > [text=\"是\"]",
          "activityIds": "com.sec.android.app.samsungapps.SearchResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14473690",
          "exampleUrls": "https://m.gkd.li/57941037/cee78493-fbe1-46a0-8dcf-a8b1f1f61f19",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-[大家还下载了]弹窗",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] - [vid=\"tv_detail_related_other_opp_title_layout\"][visibleToUser=true]",
          "activityIds": ".detail.activity.ContentDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18209149",
          "exampleUrls": "https://e.gkd.li/de1b9cc4-c47e-456a-b975-5eefaedb5e42",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-年满18岁",
      "desc": "点击【是】",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"您是否年满 18 岁？\"] +4 [vid=\"positive\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-[是否年满18岁]弹窗",
      "desc": "点击[是]",
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"年满 18 岁\"] +4 [vid=\"positive\"]",
          "activityIds": [
            ".SearchResultActivity",
            ".SamsungAppsMainActivity",
            ".updatelist.UpdateListActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14473690",
            "https://i.gkd.li/i/33385203",
            "https://i.gkd.li/i/33868896"
          ],
          "exampleUrls": "https://e.gkd.li/1417cf6c-e06d-4565-ab2e-eae6a713f1f1",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用推荐广告",
      "desc": "点击[今天不要再显示]",
      "key": 5,
      "rules": [
        {
          "matches": "@[clickable=true] > [vid=\"do_not_show_again_area_text\"][visibleToUser=true]",
          "activityIds": ".SamsungAppsMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22320803",
          "exampleUrls": "https://e.gkd.li/37b29a88-d564-4ef6-9ab3-ff88954c87fc",
          "key": 0
        }
      ]
    }
  ]
});
