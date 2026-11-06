// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "学小易",
  "id": "com.xuexiaoyi.xxy",
  "groups": [
    {
      "name": "分段广告-首页-底部广告",
      "key": 0,
      "rules": [
        {
          "matches": "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]",
          "key": 0,
          "name": "点击在下方的X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068836",
            "https://i.gkd.li/i/13375502",
            "https://i.gkd.li/i/13375559"
          ]
        },
        {
          "matches": "Image[text.length>=20] < View < View + View > Image[text.length=0]",
          "key": 1,
          "name": "点击在上方的X-类型1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068811",
            "https://i.gkd.li/i/13202990",
            "https://i.gkd.li/i/13266356",
            "https://i.gkd.li/i/13266362",
            "https://i.gkd.li/i/13457114",
            "https://i.gkd.li/i/13457204"
          ]
        },
        {
          "matches": "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View",
          "key": 2,
          "name": "点击在上方的X-类型2",
          "snapshotUrls": "https://i.gkd.li/i/13266689"
        },
        {
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "key": 3,
          "name": "点击在内部的X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13457210",
            "https://i.gkd.li/i/13457302"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "key": 4,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068819",
            "https://i.gkd.li/i/13457380"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击以后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "activityIds": "com.xuexiaoyi.entrance.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13203105",
          "key": 0
        },
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-底部广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]"
          ],
          "key": 0,
          "name": "点击在下方的X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068836",
            "https://i.gkd.li/i/13375502",
            "https://i.gkd.li/i/13375559"
          ]
        },
        {
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "key": 1,
          "name": "点击在上方的X-类型1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068811",
            "https://i.gkd.li/i/13202990",
            "https://i.gkd.li/i/13266356",
            "https://i.gkd.li/i/13266362",
            "https://i.gkd.li/i/13457114",
            "https://i.gkd.li/i/13457204"
          ]
        },
        {
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "key": 2,
          "name": "点击在上方的X-类型2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13266689"
          ]
        },
        {
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "key": 3,
          "name": "点击在内部的X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13457210",
            "https://i.gkd.li/i/13457302"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "key": 4,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068819",
            "https://i.gkd.li/i/13457380"
          ]
        }
      ]
    },
    {
      "name": "未分类-升级弹窗",
      "desc": "自动点击以后再说。",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-首页信息流广告",
      "desc": "关闭首页信息流中的广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"] < View <2 View <n View[childCount>4] > View[childCount=1] > Image[text.length=0]"
          ],
          "key": 0,
          "name": "点击在下方的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068836",
            "https://i.gkd.li/import/13375502",
            "https://i.gkd.li/import/13375559",
            "https://i.gkd.li/i/14472483",
            "https://i.gkd.li/i/15521090"
          ]
        },
        {
          "matches": [
            "[text=\"广告\"] <<n FrameLayout > [desc^=\"dislike\"] > View"
          ],
          "key": 1,
          "name": "点击在下方的X-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/15782668"
          ]
        },
        {
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "key": 2,
          "name": "点击在上方的X-类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068811",
            "https://i.gkd.li/import/13202990",
            "https://i.gkd.li/import/13266356",
            "https://i.gkd.li/import/13266362",
            "https://i.gkd.li/import/13457114",
            "https://i.gkd.li/import/13457204"
          ]
        },
        {
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "key": 3,
          "name": "点击在上方的X-类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13266689"
          ]
        },
        {
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "key": 4,
          "name": "点击在内部的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13457210",
            "https://i.gkd.li/import/13457302"
          ]
        },
        {
          "matches": "[text=\"广告\"][visibleToUser=true] < * <n View +n [text=\"反馈\"][visibleToUser=true]",
          "key": 5,
          "name": "点击[反馈]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14965789"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "fastQuery": true,
          "key": 6,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068819",
            "https://i.gkd.li/import/13457380",
            "https://i.gkd.li/i/14965790"
          ]
        }
      ]
    },
    {
      "name": "局部广告-首页-底部广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": [
            "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]"
          ],
          "key": 0,
          "name": "点击在下方的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068836",
            "https://i.gkd.li/import/13375502",
            "https://i.gkd.li/import/13375559"
          ]
        },
        {
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "key": 1,
          "name": "点击在上方的X-类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068811",
            "https://i.gkd.li/import/13202990",
            "https://i.gkd.li/import/13266356",
            "https://i.gkd.li/import/13266362",
            "https://i.gkd.li/import/13457114",
            "https://i.gkd.li/import/13457204"
          ]
        },
        {
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "key": 2,
          "name": "点击在上方的X-类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13266689"
          ]
        },
        {
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "key": 3,
          "name": "点击在内部的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13457210",
            "https://i.gkd.li/import/13457302"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "key": 4,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068819",
            "https://i.gkd.li/import/13457380"
          ]
        }
      ]
    },
    {
      "name": "首页-底部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": [
            "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]"
          ],
          "key": 0,
          "name": "点击在下方的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068836",
            "https://i.gkd.li/import/13375502",
            "https://i.gkd.li/import/13375559"
          ]
        },
        {
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "key": 1,
          "name": "点击在上方的X-类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068811",
            "https://i.gkd.li/import/13202990",
            "https://i.gkd.li/import/13266356",
            "https://i.gkd.li/import/13266362",
            "https://i.gkd.li/import/13457114",
            "https://i.gkd.li/import/13457204"
          ]
        },
        {
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "key": 2,
          "name": "点击在上方的X-类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13266689"
          ]
        },
        {
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "key": 3,
          "name": "点击在内部的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13457210",
            "https://i.gkd.li/import/13457302"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "key": 4,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/13068819",
            "https://i.gkd.li/import/13457380"
          ]
        }
      ]
    },
    {
      "name": "升级弹窗",
      "desc": "自动点击以后再说。",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
