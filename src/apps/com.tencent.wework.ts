// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "企业微信",
  "id": "com.tencent.wework",
  "groups": [
    {
      "name": "功能类-自动领红包",
      "desc": "自己发的红包不领",
      "key": 0,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[childCount=0] + RelativeLayout >2 @RelativeLayout[clickable=true][childCount=4] > LinearLayout[index=1][getChild(0).childCount=1] + RelativeLayout[childCount=1] > TextView[text=\"红包\"]",
          "activityIds": [
            ".msg.controller.ExternalContactMessageListActivity",
            ".msg.controller.MessageListActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "点击别人发的红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/14151095",
            "https://i.gkd.li/i/24560890",
            "https://i.gkd.li/i/24577241"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14151131"
        },
        {
          "matches": "RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "activityIds": ".enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity",
          "key": 1,
          "name": "开红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/24560289",
            "https://i.gkd.li/i/24588743"
          ]
        },
        {
          "matches": "[text=\"已存入绑定的微信零钱账户\"][visibleToUser=true]",
          "action": "back",
          "preKeys": [
            0,
            1
          ],
          "activityIds": ".enterprise.redenvelopes.controller.RedEnvelopeDetailActivity",
          "fastQuery": true,
          "key": 2,
          "name": "从金额页面返回到聊天页面",
          "snapshotUrls": "https://i.gkd.li/i/14151120"
        }
      ]
    },
    {
      "name": "分段广告-顶部卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[clickable=true][childCount=0] < ViewFlipper[childCount=1] + @ImageView[clickable=true][visibleToUser=true][width<140 && height<140] <n RelativeLayout <<n RecyclerView[childCount>10] <n FrameLayout <n ViewGroup - RelativeLayout >4 [text=\"工作台\"]",
          "activityIds": "com.tencent.wework.launch.WwMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16977927",
            "https://i.gkd.li/i/24099806"
          ],
          "exampleUrls": "https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1"
        },
        {
          "matches": "[text=\"关闭\"]",
          "preKeys": [
            4
          ],
          "activityIds": "com.tencent.wework.launch.WwMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16977929",
          "exampleUrls": "https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84",
          "key": 1
        },
        {
          "matches": "ImageView[clickable=true][childCount=0] < ViewFlipper[childCount=1] + @ImageView[clickable=true][visibleToUser=true][width<140 && height<140] <n RelativeLayout <<n RecyclerView[childCount>10] <n FrameLayout <n ViewGroup - RelativeLayout >4 [text=\"工作台\"]",
          "activityIds": ".launch.WwMainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16977927",
            "https://i.gkd.li/i/24099806"
          ],
          "exampleUrls": "https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1"
        },
        {
          "matches": "[text=\"关闭\"]",
          "preKeys": [
            4
          ],
          "activityIds": ".launch.WwMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16977929",
          "exampleUrls": "https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84",
          "key": 3
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] - ViewFlipper < RelativeLayout < LinearLayout < LinearLayout < RecyclerView < FrameLayout <2 ViewGroup - RelativeLayout >4 [text=\"工作台\"]",
          "activityIds": "com.tencent.wework.launch.WwMainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16977927",
          "exampleUrls": "https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1"
        }
      ]
    },
    {
      "name": "权限提示-悬浮窗",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"请开启悬浮窗\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": "com.tencent.wework.common.controller.DialogActivityUtil",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230054",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"请开启悬浮窗\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": ".common.controller.DialogActivityUtil",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24230054",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动抢红包",
      "desc": "自己发的红包不抢",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > ImageView + * @RelativeLayout[childCount=4] > LinearLayout[index=1] > LinearLayout[childCount=1] > [text=\"恭喜发财，大吉大利\"]",
          "activityIds": "com.tencent.wework.msg.controller.ExternalContactMessageListActivity",
          "fastQuery": true,
          "key": 0,
          "name": "点击别人发的红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/14151095",
            "https://i.gkd.li/i/14151131"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/64bdd899-9a30-4816-bafc-a9e2a0d09ec6"
        },
        {
          "matches": "RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView",
          "preKeys": 0,
          "activityIds": "com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity",
          "key": 1,
          "name": "开红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/14151108",
            "https://i.gkd.li/i/14151215"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/52525cdb-0746-483c-b1ba-2282f3a8b8ed"
        },
        {
          "matches": "LinearLayout[childCount=3] > LinearLayout TextView",
          "preKeys": [
            0,
            1
          ],
          "activityIds": "com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity",
          "key": 2,
          "name": "从金额页面返回到聊天页面",
          "snapshotUrls": "https://i.gkd.li/i/14151120",
          "exampleUrls": "https://m.gkd.li/57941037/2a69cf93-1d10-48c4-8456-663197c6feca"
        }
      ]
    }
  ]
});
