// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "头条搜索极速版",
  "id": "com.ss.android.article.lite",
  "groups": [
    {
      "name": "未分类-首页-红包弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text$=\"现金红包\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-右侧悬浮广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-你可能感兴趣的人",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] + [desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-任务页面-签到弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705439",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-任务页面-右侧悬浮红包",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "UIScrollView + UIView + UISvg",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-任务页面-答题弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"答对\"][text$=\"金币\"] + FlattenUIImage[clickable=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705456",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-搜索页面-搜索得金币弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text^=\"搜索\"][text$=\"金币\"] + LynxFlattenUI + UISvg",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705468",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-全自动续听书时长",
      "desc": "<03:45有效,时长不足自动看广告",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"03:\" && text.substring(3,5).toInt()>45] - [text=\"剩余时长\"] < * -3 @ImageView[width<102 && height<102] + [text^=\"领取成功\"]",
          "key": 0,
          "name": "③已完成-关闭",
          "snapshotUrls": "https://i.gkd.li/i/26456102"
        },
        {
          "matches": "[text.get(1).toInt()<3 || (text^=\"03:\" && text.substring(3,5).toInt()<45)] - [text=\"剩余时长\"] < * + [text^=\"看视频领取\"][clickable=true]",
          "key": 1,
          "name": "①点击看视频",
          "snapshotUrls": "https://i.gkd.li/i/26456075",
          "exampleUrls": "https://e.gkd.li/dec3910f-ee59-482b-99e0-aba6de33c67c"
        },
        {
          "matches": "ImageView < @ViewGroup[childCount=1][visibleToUser=true] <n ViewGroup[childCount>6] <<6 [id=\"android:id/content\"]",
          "preKeys": [
            1
          ],
          "name": "②领取成功x掉",
          "snapshotUrls": "https://i.gkd.li/i/26456098",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26456099",
          "exampleUrls": "https://e.gkd.li/720a223e-70af-455a-965c-dcf1a7228921",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页-红包弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text$=\"现金红包\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-右侧悬浮广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-你可能感兴趣的人",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] + [desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-任务页面-签到弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705439",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-任务页面-右侧悬浮红包",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "UIScrollView + UIView + UISvg",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-任务页面-答题弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[text^=\"答对\"][text$=\"金币\"] + FlattenUIImage[clickable=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705456",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-搜索页面-搜索得金币弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text^=\"搜索\"][text$=\"金币\"] + LynxFlattenUI + UISvg",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705468",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-首页-你可能感兴趣的人",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] + [desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-红包弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text$=\"现金红包\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-右侧悬浮广告",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-你可能感兴趣的人",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] + [desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "任务页面-签到弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705439",
          "key": 0
        }
      ]
    },
    {
      "name": "任务页面-右侧悬浮红包",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "UIScrollView + UIView + UISvg",
          "key": 0
        }
      ]
    },
    {
      "name": "任务页面-答题弹窗",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[text^=\"答对\"][text$=\"金币\"] + FlattenUIImage[clickable=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705456",
          "key": 0
        }
      ]
    },
    {
      "name": "搜索页面-搜索得金币弹窗",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[text^=\"搜索\"][text$=\"金币\"] + LynxFlattenUI + UISvg",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12705468",
          "key": 0
        }
      ]
    }
  ]
});
