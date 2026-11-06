// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "一起来涂色",
  "id": "com.xingluo.allcolor",
  "groups": [
    {
      "name": "分段广告-底部穿山甲广告",
      "desc": "点击卡片广告x关闭按钮-关闭反馈理由弹窗",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View[childCount=2] >2 [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12640359"
        },
        {
          "matches": "@Image[id=null] < View -2 View > View > View > TextView[text=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12640362"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12640374"
        },
        {
          "matches": "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12640406"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "穿山甲广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12640358",
          "key": 4
        }
      ]
    },
    {
      "name": "未分类-底部穿山甲广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "name": "穿山甲广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12640358",
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\"] < * - View < * - View > Image[id=null]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12640359"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View -(2) View > View > View > TextView[text=\"广告\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12640362"
          ]
        },
        {
          "matches": [
            "@View[id=null] < FrameLayout[desc^=\"dislike\"] + FrameLayout >(2) TextView[text=\"广告\"]"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12640374"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12640406"
          ]
        }
      ]
    },
    {
      "name": "局部广告-底部穿山甲广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "name": "穿山甲广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12640358",
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\"] < * - View < * - View > Image[id=null]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640359"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View -(2) View > View > View > TextView[text=\"广告\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640362"
          ]
        },
        {
          "matches": [
            "@View[id=null] < FrameLayout[desc^=\"dislike\"] + FrameLayout >(2) TextView[text=\"广告\"]"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640374"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640406"
          ]
        }
      ]
    },
    {
      "name": "底部穿山甲广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "name": "穿山甲广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12640358",
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\"] < * - View < * - View > Image[id=null]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640359"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View -(2) View > View > View > TextView[text=\"广告\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640362"
          ]
        },
        {
          "matches": [
            "@View[id=null] < FrameLayout[desc^=\"dislike\"] + FrameLayout >(2) TextView[text=\"广告\"]"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640374"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640406"
          ]
        }
      ]
    }
  ]
});
