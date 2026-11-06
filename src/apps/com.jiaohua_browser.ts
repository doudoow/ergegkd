// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "JMComic2",
  "id": "com.jiaohua_browser",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "关闭选择路线后的全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > @ViewGroup[clickable=true][visibleToUser=true] > [text=\"\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20709992",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20718812",
          "exampleUrls": "https://e.gkd.li/447bea41-2771-4a57-8436-82da37d0b3b2",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "desc": "关闭底部横幅广告",
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[getChild(0).getChild(0).getChild(0).getChild(0).getChild(1).text=\"AD\"] + @ViewGroup[clickable=false] > [text=\"\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20713583",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20709992",
          "exampleUrls": "https://e.gkd.li/002589d0-660e-4658-8e20-42c1ac8710fc",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-路线选择",
      "desc": "选择路线，优先顺畅>普通>缓慢",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "anyMatches": [
            "@ViewGroup[clickable=true][visibleToUser=true] > [text=\"顺畅\" || text=\"順暢\"]",
            "@ViewGroup[clickable=true][visibleToUser=true] > [text=\"普通\"]",
            "@ViewGroup[clickable=true][visibleToUser=true] > [text=\"缓慢\"]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/20711163",
            "https://i.gkd.li/i/20713674",
            "https://i.gkd.li/i/20713715",
            "https://i.gkd.li/i/20718557"
          ],
          "exampleUrls": [
            "https://e.gkd.li/68004e70-6b78-41f2-b329-ff600038db94",
            "https://e.gkd.li/66403e39-475b-447d-a708-db10be74eba8",
            "https://e.gkd.li/930e1df4-5f1d-4a4d-bf78-6f1d8c5715de"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-点击[我保证我已满18岁]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@ViewGroup[childCount=1][clickable=true][visibleToUser=true] > [text^=\"我保证我已满18岁\" || text^=\"我保證我已滿18歲\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/20711995",
            "https://i.gkd.li/i/20718577"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/20713533",
          "exampleUrls": "https://e.gkd.li/f890ac7e-8626-4fc3-85c1-83d6776cb3f4",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 4,
      "rules": [
        {
          "matches": "@ViewGroup > [text=\"\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页底部广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@ViewGroup > [text=\"\"][visibleToUser=true]",
          "excludeMatches": "[text=\"搜尋紀錄\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14141810",
            "https://i.gkd.li/i/14142408",
            "https://i.gkd.li/i/14205165"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-已满18岁弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"滿18歲\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到活动",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ViewGroup > [text=\"立即簽到\"][visibleToUser=true]",
          "key": 0
        }
      ]
    }
  ]
});
