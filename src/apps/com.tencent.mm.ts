// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微信",
  "id": "com.tencent.mm",
  "groups": [
    {
      "name": "分段广告-朋友圈广告",
      "desc": "警告⚠️：该规则有可能会误触，请谨慎开启",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "@LinearLayout[clickable=true] > [text=\"广告\" || text=\"廣告\" || text=\"Sponsored\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13000395",
            "https://i.gkd.li/i/12905837",
            "https://i.gkd.li/i/13791200",
            "https://i.gkd.li/i/16568338"
          ]
        },
        {
          "anyMatches": [
            "@LinearLayout >2 [text=\"广告\"][visibleToUser=false]",
            "RecyclerView > FrameLayout[childCount=1] > RelativeLayout > FrameLayout > LinearLayout > LinearLayout > LinearLayout > @LinearLayout[childCount=2][getChild(0).getChild(0).text!=null] > LinearLayout[index=1][clickable=false][visibleToUser=false]"
          ],
          "position": {
            "left": "width * 0.9223",
            "top": "height * 0.5"
          },
          "actionDelay": 300,
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14783802",
            "https://i.gkd.li/i/15531539",
            "https://i.gkd.li/i/19665911"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/19717709"
        },
        {
          "matches": "[name$=\"RecyclerView\"||name$=\"ListView\"] >(1,2) RelativeLayout >3 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14647413",
            "https://i.gkd.li/i/19633571"
          ]
        },
        {
          "anyMatches": [
            "[text^=\"关闭\" || text*=\"Close\" || text=\"關閉此廣告\"][clickable=true][visibleToUser=true]",
            "@LinearLayout[clickable=true] > [text=\"关闭该广告\" || text*=\"Close\"][visibleToUser=true]",
            "@LinearLayout[index=1][clickable=true] <2 * < * - [text*=\"广告\"]",
            "@[text=\"关闭该广告\"] -2 [text^=\"对这条广告不感兴趣\"][visibleToUser=true]"
          ],
          "preKeys": [
            21,
            22,
            23
          ],
          "fastQuery": true,
          "key": 3,
          "name": "点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13926578",
            "https://i.gkd.li/i/15531274",
            "https://i.gkd.li/i/14207480",
            "https://i.gkd.li/i/15137016",
            "https://i.gkd.li/i/13791202",
            "https://i.gkd.li/i/14783820",
            "https://i.gkd.li/i/15284966",
            "https://i.gkd.li/i/14647839",
            "https://i.gkd.li/i/19666176",
            "https://i.gkd.li/i/19633486"
          ]
        },
        {
          "matches": "[text*=\"关闭\" || text=\"Close\"][clickable=true]",
          "preKeys": [
            8
          ],
          "key": 4,
          "name": "点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/12905846",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ]
        },
        {
          "matches": "@[text=\"确认\"][visibleToUser=true] -2 [text=\"不感兴趣原因\"]",
          "preKeys": [
            18
          ],
          "fastQuery": true,
          "key": 5,
          "name": "点击[确认]",
          "snapshotUrls": "https://i.gkd.li/i/14647940"
        },
        {
          "matches": "RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]",
          "key": 6,
          "name": "点击广告卡片右上角",
          "snapshotUrls": [
            "https://i.gkd.li/i/13000395",
            "https://i.gkd.li/i/12905837",
            "https://i.gkd.li/i/13791200",
            "https://i.gkd.li/i/14647413"
          ]
        },
        {
          "matches": "@LinearLayout >2 [text=\"广告\"]",
          "excludeMatches": "RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]",
          "position": {
            "left": "width * 0.9223",
            "top": "width * 0.0349"
          },
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14783802"
        },
        {
          "matches": "[text^=\"关闭\"][clickable=true]",
          "preKeys": [
            21
          ],
          "fastQuery": true,
          "key": 8,
          "name": "点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907642",
            "https://i.gkd.li/i/13926578"
          ]
        },
        {
          "matches": "[text*=\"Close\"][clickable=true]",
          "preKeys": [
            21
          ],
          "fastQuery": true,
          "key": 9,
          "name": "点击[Close]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14207480",
            "https://i.gkd.li/i/15137016"
          ]
        },
        {
          "matches": "[text=\"關閉此廣告\"][clickable=true]",
          "preKeys": [
            21
          ],
          "fastQuery": true,
          "key": 10,
          "name": "点击[关闭此广告]",
          "snapshotUrls": "https://i.gkd.li/i/13791202"
        },
        {
          "matches": "@LinearLayout[index=1][clickable=true] <2 * < * - [text*=\"广告\"]",
          "preKeys": [
            21,
            22
          ],
          "fastQuery": true,
          "key": 11,
          "name": "点击[关闭该广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642584",
            "https://i.gkd.li/i/14647839",
            "https://i.gkd.li/i/14783820"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text*=\"Close\"]",
          "preKeys": [
            21
          ],
          "fastQuery": true,
          "key": 12,
          "name": "点击[Close the ad]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12905838",
            "https://i.gkd.li/i/15284966"
          ]
        },
        {
          "matches": "[text*=\"关闭\"][clickable=true]",
          "preKeys": [
            11
          ],
          "key": 13,
          "name": "点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ]
        },
        {
          "matches": "[text=\"Close\"][clickable=true]",
          "preKeys": [
            12
          ],
          "key": 14,
          "name": "点击\"Close\"",
          "snapshotUrls": "https://i.gkd.li/i/12905846"
        },
        {
          "matches": "[text=\"确认\"][clickable=true]",
          "preKeys": [
            18
          ],
          "key": 15,
          "name": "点击[确认]",
          "snapshotUrls": "https://i.gkd.li/i/14647940"
        },
        {
          "anyMatches": [
            "@LinearLayout >2 [text=\"广告\"][visibleToUser=false]",
            "[index=parent.childCount.minus(1)] >5 [getChild(0).desc$=\"的头像\"] >2 LinearLayout[childCount=2][getChild(0).getChild(0).text!=null][getChild(1).visibleToUser=false]"
          ],
          "position": {
            "left": "width * 0.9223",
            "top": "height * 0.5"
          },
          "actionDelay": 300,
          "fastQuery": true,
          "key": 16,
          "name": "①坐标点击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14783802",
            "https://i.gkd.li/i/15531539",
            "https://i.gkd.li/i/19665911"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19717709",
            "https://i.gkd.li/i/27969204"
          ]
        },
        {
          "matches": "[getChild(0).desc$=\"的头像\"] >2 [childCount=2] > LinearLayout[text=null][clickable=true][childCount=0][index=1]",
          "key": 17,
          "name": "①单击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14647413",
            "https://i.gkd.li/i/19633571"
          ]
        },
        {
          "matches": "[text=\"直接关闭\" || text=\"Close\" || text=\"关闭广告\"][clickable=true]",
          "preKeys": [
            8
          ],
          "key": 18,
          "name": "③点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/12905846",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/28927197"
        },
        {
          "matches": "ImageView - TextView[text=\"广告\"][clickable=true][id!=null]",
          "key": 21,
          "name": "点击广告卡片右上角",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642588",
            "https://i.gkd.li/import/12888129",
            "https://i.gkd.li/import/12907641",
            "https://i.gkd.li/import/13000395"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true][childCount=2] > [text=\"关闭该广告\"]",
          "key": 22,
          "name": "你觉得这条广告怎么样-点击[关闭该广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642584"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        },
        {
          "matches": "[text=\"关闭该广告的原因\"] +(2) [text=\"直接关闭\"]",
          "key": 23,
          "name": "关闭该广告的原因-点击[直接关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12663984"
          ],
          "action": "clickCenter",
          "actionDelay": 300,
          "preKeys": [
            22
          ]
        },
        {
          "matches": "TextView[text^=\"关闭\"][text$=\"广告\"][clickable=true]",
          "key": 24,
          "name": "广告反馈-点击[关闭该广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907642",
            "https://i.gkd.li/import/13926578"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        },
        {
          "key": 25,
          "name": "关闭该广告-兜底",
          "action": "clickCenter",
          "actionDelay": 300,
          "matches": "@LinearLayout[clickable=true] > [text=\"关闭该广告\"][visibleToUser=true]"
        }
      ]
    },
    {
      "name": "功能类-电脑微信快捷自动登录",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"登录 Windows 微信\" || text^=\"Log in to Weixin for\"][visibleToUser=true]",
            "[text=\"登录\" || text=\"Log In\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".plugin.webwx.ui.ExtDeviceWXLoginUI",
            ".ui.LauncherUI"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13522625",
            "https://i.gkd.li/i/13522577",
            "https://i.gkd.li/i/22356438"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"取消登录\"] - Button[text=\"登录\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动授权登录",
      "desc": "自动允许使用头像昵称等",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"获取你的\" || text^=\"取得你的\" || text^=\"你的昵称\"]",
            "[text=\"允许\" || text=\"允許\"]"
          ],
          "activityIds": [
            ".plugin.base.stub.UIEntryStub",
            ".ui.LauncherUI",
            ".plugin.webview.ui.tools.MMWebViewUI",
            ".plugin.webview.ui.tools.SDKOAuthUI"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12663602",
            "https://i.gkd.li/i/13065462",
            "https://i.gkd.li/i/15271716",
            "https://i.gkd.li/i/16972565",
            "https://i.gkd.li/i/19496823"
          ]
        },
        {
          "matches": [
            "[text=\"申请获得\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "preKeys": [
            0
          ],
          "activityIds": ".plugin.webview.ui.tools.SDKOAuthOtherUI",
          "snapshotUrls": "https://i.gkd.li/i/24560465",
          "key": 1
        },
        {
          "matches": [
            "[text^=\"获取你的\"]",
            "[text=\"允许\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12663602",
            "https://i.gkd.li/i/13065462",
            "https://i.gkd.li/i/15271716"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-微信读书网页版扫码登录自动授权",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"微信读书网页版\"] +3 Button[text=\"登 录\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12506197"
        },
        {
          "matches": "[text=\"登录成功\"]",
          "action": "back",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12506201"
        },
        {
          "matches": [
            "[text=\"登录成功\"]",
            "[id=\"com.tencent.mm:id/g1\"][desc=\"返回\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12506201",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动领取微信红包",
      "desc": "自动领取私聊红包,群聊红包",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text=\"微信红包\"]",
          "activityIds": [
            ".ui.LauncherUI",
            ".ui.chatting.variants.ChattingMainUI"
          ],
          "key": 0,
          "name": "点击别人发的红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134826",
            "https://i.gkd.li/i/24347101"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18134823",
            "https://i.gkd.li/i/18134833"
          ]
        },
        {
          "matches": "@Button[desc=\"开\"] -3 LinearLayout >2 [text$=\"红包\"]",
          "preKeys": [
            0
          ],
          "activityIds": ".plugin.luckymoney.ui.LuckyMoney",
          "matchRoot": true,
          "key": 1,
          "name": "点击红包-开",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134828",
            "https://i.gkd.li/i/21177180"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/12567698"
        },
        {
          "matches": "@ImageView[desc=\"返回\"] +n LinearLayout >8 [text$=\"红包\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": ".plugin.luckymoney.ui.LuckyMoney",
          "name": "从红包结算界面返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134829",
            "https://i.gkd.li/i/18135031",
            "https://i.gkd.li/i/23825631",
            "https://i.gkd.li/i/24414957"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动选中发送原图",
      "desc": "自动选中底部中间的发送原图，可手动取消勾选",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "anyMatches": [
            "@[desc=\"未选中,原图,复选框\"][visibleToUser=true] + [text=\"原图\"]",
            "@[desc=\"未选中,原图,复选框\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16987145",
            "https://i.gkd.li/i/16987144",
            "https://i.gkd.li/i/19625049"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16987141",
            "https://i.gkd.li/i/16987147"
          ],
          "exampleUrls": [
            "https://e.gkd.li/32dc0943-e85f-416d-bb01-6ed610d4bdd8",
            "https://e.gkd.li/93d41161-ab69-4c2d-83bb-637d7292f5e6"
          ]
        },
        {
          "matches": "@ImageButton[desc=\"未选中,原图,复选框\"] + [text=\"原图\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12686641",
            "https://i.gkd.li/i/12840865",
            "https://i.gkd.li/i/12686640",
            "https://i.gkd.li/i/14654129"
          ]
        },
        {
          "anyMatches": [
            "@[desc^=\"未选中\" || desc^=\"未選定\" || desc^=\"Unselected\"][visibleToUser=true] + [text=\"原图\" || text=\"原圖\" || text=\"Full Image\"]",
            "[desc^=\"未选中\" || desc^=\"未選定\" || desc^=\"Unselected\"][!(desc*=\"选择\")][text=null][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16987145",
            "https://i.gkd.li/i/16987144",
            "https://i.gkd.li/i/18413281",
            "https://i.gkd.li/i/14661734",
            "https://i.gkd.li/i/27852612",
            "https://i.gkd.li/i/19625049"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16987141",
            "https://i.gkd.li/i/16987147",
            "https://i.gkd.li/i/27852606",
            "https://i.gkd.li/i/29746331"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "自动点击底部左侧[查看原图]按钮",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "anyMatches": [
            "Button[text^=\"查看\"][clickable=true][visibleToUser=true]",
            "Button[clickable=true][text^=\"查看\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13523031",
            "https://i.gkd.li/i/17698956",
            "https://i.gkd.li/i/19515095",
            "https://i.gkd.li/i/19645122"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6bb9e68a-43f5-4482-96b1-899cc86fef32"
        },
        {
          "matches": "[text^=\"原图\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.LauncherUI",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25009442"
        },
        {
          "matches": "Button[text^=\"查看原图\"][clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告-微信小程序",
      "matchTime": 10000,
      "forcedTime": 10000,
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "actionDelay": 800,
          "snapshotUrls": [
            "https://i.gkd.li/i/12785183",
            "https://i.gkd.li/i/13306883",
            "https://i.gkd.li/i/13407275",
            "https://i.gkd.li/i/15108441"
          ],
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\" || text=\"廣告\"][visibleToUser=true]",
            "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]"
          ],
          "actionDelay": 800,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12785183",
            "https://i.gkd.li/i/13306883",
            "https://i.gkd.li/i/13407275",
            "https://i.gkd.li/i/15108441",
            "https://i.gkd.li/i/32969391"
          ]
        },
        {
          "matches": "@TextView[text*=\"跳过\"][text.length<10][height<150] <<(25-n) FrameLayout[childCount=2] <(1,2) * < [id=\"android:id/content\"]",
          "actionCd": 500,
          "matchRoot": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/26677309",
            "https://i.gkd.li/i/26747393"
          ]
        }
      ]
    },
    {
      "name": "功能类-网页版文件传输助手扫码自动授权",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"打开网页版文件传输助手\"] + * > Button[text=\"打开\"]",
          "activityIds": ".ui.LauncherUI",
          "snapshotUrls": "https://i.gkd.li/i/12793745",
          "key": 0
        },
        {
          "matches": "[text=\"打开网页版文件传输助手\"] + * > Button[text=\"打开\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "青少年模式",
      "desc": "关闭青少年模式提示弹窗",
      "enable": false,
      "matchTime": 20000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -8,
      "key": 9,
      "rules": [
        {
          "matches": "@[text=\"我知道了\"][index=parent.childCount.minus(1)] <n LinearLayout > [text^=\"为呵护未成年人健康成长\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13538145",
            "https://i.gkd.li/i/13575195",
            "https://i.gkd.li/i/14735456",
            "https://i.gkd.li/i/14896723",
            "https://i.gkd.li/i/18135103",
            "https://i.gkd.li/i/19683937"
          ]
        },
        {
          "matches": "@[text=\"不再提醒\"][clickable=true] <2 [index=parent.childCount.minus(1)] -n [text^=\"为呵护未成年人健康成长\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24796791"
        },
        {
          "matches": [
            "[text*=\"青少年模式\"]",
            "[text=\"我知道了\"]"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.finder.ui.",
            "com.tencent.mm.ui.LauncherUI"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13538145",
            "https://i.gkd.li/i/13575195",
            "https://i.gkd.li/i/14735456",
            "https://i.gkd.li/i/14896723"
          ],
          "key": 2
        },
        {
          "matches": "TextView[text^=\"为呵护未成年人健康成长，微信推出青少年模式\"] +2 Button[text=\"我知道了\"]",
          "key": 3
        }
      ]
    },
    {
      "name": "功能类-青少年模式自动点击验证密码",
      "desc": "点击“验证密码”以申请临时访问",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 10,
      "rules": [
        {
          "matches": "@LinearLayout[childCount=2] > TextView[text=\"验证密码\"]",
          "activityIds": ".plugin.teenmode.ui.AuthorizationRequestUI",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13588338"
        },
        {
          "matches": "View[desc=\"验证密码\"][clickable=true]",
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13631987"
        },
        {
          "matches": "@LinearLayout[childCount=2] > [text=\"验证密码\"]",
          "activityIds": "com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13588338"
        },
        {
          "matches": [
            "View[text=\"申请今天临时访问\"]",
            "View[desc=\"验证密码\"]"
          ],
          "activityIds": "com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13631987"
        },
        {
          "matches": [
            "[text=\"申请今天临时访问\"]",
            "[text=\"验证密码\"]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13631987",
            "https://i.gkd.li/import/13588338",
            "https://i.gkd.li/i/14050004"
          ]
        }
      ]
    },
    {
      "name": "功能类-订阅号-展开更早的消息",
      "desc": "自动展开订阅号历史消息",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"展开更早的消息\"]",
          "activityIds": ".plugin.brandservice.ui.timeline.BizTimeLineUI",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13790550"
        },
        {
          "matches": "[desc=\"展开更早的消息\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13790949"
        },
        {
          "matches": "@[clickable=true] > [text=\"展开更早的消息\"]",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13790550"
        },
        {
          "matches": "@[clickable=true] > [text=\"展开更早的消息\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13790550"
        },
        {
          "matches": "[text=\"展开更早的消息\"] < [id=\"com.tencent.mm:id/aqc\"]",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI",
          "fastQuery": true,
          "key": 4,
          "name": "8.0.44以下",
          "snapshotUrls": "https://i.gkd.li/import/13790550"
        }
      ]
    },
    {
      "name": "功能类-开启青少年模式后的每日验证",
      "desc": "点击\"验证密码\"",
      "key": 12,
      "rules": [
        {
          "matches": "WebView[childCount=6] View[index=4] > [text=\"验证密码\"][clickable=true]",
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "snapshotUrls": "https://i.gkd.li/i/14050004",
          "key": 0
        },
        {
          "matches": "WebView[childCount=6] View[index=4] > [text=\"验证密码\"][clickable=true]",
          "action": "clickCenter",
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "snapshotUrls": "https://i.gkd.li/i/14050004",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-订阅号消息-推荐文章",
      "desc": "点击关闭",
      "key": 13,
      "rules": [
        {
          "matches": "View[childCount=2] > View[desc$=\"推​荐​\"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/14392392",
          "key": 0
        },
        {
          "matches": "View[childCount=2] > View[desc$=\"推​荐​\" || desc$=\"推​薦​\"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/14392392",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-付款后自动点击完成/返回商家",
      "desc": "支付完成后自动点击完成或返回商家按钮",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"kinda_button_impl_wrapper\"][desc=\"完成\" || desc=\"返回商家\"]",
          "activityIds": ".framework.app.UIPageFragmentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14399355",
            "https://i.gkd.li/i/14662147",
            "https://i.gkd.li/i/24157874"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14532946",
          "exampleUrls": "https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8"
        },
        {
          "matches": "Button[desc=\"返回商家\"][visibleToUser=true]",
          "activityIds": ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24141842",
          "exampleUrls": "https://e.gkd.li/e7acbb38-c602-4ea4-88ec-7604c3aeae06"
        },
        {
          "matches": "[vid=\"kinda_button_impl_wrapper\"][desc=\"完成\" || desc=\"返回商家\"]",
          "activityIds": "com.tencent.mm.framework.app.UIPageFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14399355",
            "https://i.gkd.li/i/14662147",
            "https://i.gkd.li/i/14532946"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8",
          "key": 2
        },
        {
          "matches": "[vid=\"kinda_button_impl_wrapper\"][desc=\"完成\" || desc=\"返回商家\"]",
          "activityIds": ".framework.app.UIPageFragmentActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14662147",
            "https://i.gkd.li/i/14399355",
            "https://i.gkd.li/i/24157874",
            "https://i.gkd.li/i/33430797"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14532946",
          "exampleUrls": "https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8"
        },
        {
          "matches": "@Button[desc=\"完成\" || desc=\"返回商家\" || desc=\"Done\"][visibleToUser=true] -n [desc=\"支付成功\"] < * <<6 FrameLayout <<3 [id=\"android:id/content\"]",
          "activityIds": [
            ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
            ".plugin.lite.ui.WxaLiteAppLiteUI",
            ".plugin.lite.ui.WxaLiteAppPayTransparentLiteUI"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/24141842",
            "https://i.gkd.li/i/29681932",
            "https://i.gkd.li/i/31693084",
            "https://i.gkd.li/i/33480728"
          ],
          "exampleUrls": "https://e.gkd.li/e7acbb38-c602-4ea4-88ec-7604c3aeae06"
        },
        {
          "matches": [
            "[text=\"支付成功\"]",
            "[text*=\"￥\"||text*=\"¥\"]",
            "[text=\"完成\"||text=\"返回商家\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14399355",
            "https://i.gkd.li/i/14558398",
            "https://i.gkd.li/i/14662147",
            "https://i.gkd.li/i/16215946",
            "https://i.gkd.li/i/18348017"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14532946"
          ],
          "key": 5
        }
      ]
    },
    {
      "name": "分段广告-订阅号消息-视频推荐",
      "desc": "点击[X]-点击[不喜欢此类视频]-点击[确定]",
      "key": 15,
      "rules": [
        {
          "matches": "[desc=\"订阅号消息\"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]",
          "key": 0,
          "name": "点击[X]",
          "snapshotUrls": "https://i.gkd.li/i/14436176",
          "exampleUrls": "https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475"
        },
        {
          "matches": "[desc=\"不喜欢此类视频\"][clickable=true]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[不喜欢此类视频]",
          "snapshotUrls": "https://i.gkd.li/i/14444654",
          "exampleUrls": "https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4"
        },
        {
          "matches": "[desc=\"确定\"][clickable=true]",
          "preKeys": 1,
          "key": 2,
          "name": "点击[确定]",
          "snapshotUrls": "https://i.gkd.li/i/14436190",
          "exampleUrls": "https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10",
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "功能类-解锁 Windows 微信",
      "desc": "点击[解锁]",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "anyMatches": [
            "[text=\"解锁\"][clickable=true][visibleToUser=true]",
            "@[text=\"解锁\"][clickable=true] < LinearLayout -2 [text^=\"解锁\"][visibleToUser=true]"
          ],
          "activityIds": ".plugin.webwx.ui.WebWXUnlockUI",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14490116",
            "https://i.gkd.li/i/23688962"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca",
          "key": 0
        },
        {
          "matches": "[text=\"解锁\"]",
          "activityIds": "com.tencent.mm.plugin.webwx.ui.WebWXUnlockUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14490116",
          "exampleUrls": "https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca",
          "key": 1
        },
        {
          "anyMatches": [
            "[text=\"解锁\" || text=\"解鎖\"][clickable=true][visibleToUser=true]",
            "@[text=\"解锁\" || text=\"解鎖\"][clickable=true] < LinearLayout -2 [text^=\"解锁\" || text=\"解鎖\"][visibleToUser=true]"
          ],
          "activityIds": ".plugin.webwx.ui.WebWXUnlockUI",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14490116",
            "https://i.gkd.li/i/23688962"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-文档页面-腾讯文档APP弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "@TextView[clickable=true] + * > [visibleToUser=true][text^=\"使用 APP\"] <<n [id=\"android:id/content\"]",
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14533286",
          "exampleUrls": "https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6",
          "key": 0
        },
        {
          "matches": "@TextView[clickable=true] + * > [text^=\"使用 APP\"] <<n [id=\"android:id/content\"]",
          "activityIds": "com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14533286",
          "exampleUrls": "https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-订阅号消息-推荐阅读",
      "desc": "点击关闭",
      "key": 18,
      "rules": [
        {
          "matches": "View > Button > View[desc$=\"推​荐​\"] > ImageView[index=1][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14548701",
          "exampleUrls": "https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea"
        },
        {
          "matches": "[desc=\"不看此类内容\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14549566"
        },
        {
          "matches": "[desc=\"确定\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14549567",
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "权限提示-权限申请弹窗",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 19,
      "rules": [
        {
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".pluginsdk.permission.PermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14645385",
          "exampleUrls": "https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679",
          "key": 0
        },
        {
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.tencent.mm.pluginsdk.permission.PermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14645385",
          "exampleUrls": "https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-付款时自动点击[支付]",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "ViewGroup + ViewGroup > ViewGroup > [vid=\"kinda_button_impl_wrapper\"][desc=\"支付\"]",
          "activityIds": ".framework.app.UIPageFragmentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15144570",
            "https://i.gkd.li/i/15144571",
            "https://i.gkd.li/i/15360745",
            "https://i.gkd.li/i/24157875"
          ]
        },
        {
          "matches": "[desc^=\"付款方式\"] + Button[desc=\"支付\"][visibleToUser=true]",
          "activityIds": ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "forcedTime": 100000,
          "matchRoot": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23746748"
        },
        {
          "matches": "[vid=\"kinda_button_impl_wrapper\"][desc=\"立即支付\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15144571",
          "exampleUrls": "https://m.gkd.li/57941037/13fd1e89-6d75-4efe-90d6-91687de8c9b1"
        },
        {
          "matches": "[vid=\"kinda_button_impl_wrapper\"][desc=\"支付\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15144570",
          "exampleUrls": "https://m.gkd.li/57941037/69380aa0-e6d2-4ea4-8ee7-6a1e45889e6c"
        }
      ]
    },
    {
      "name": "分段广告-公众号文章内广告",
      "desc": "注意⚠️：该规则有概率误触，请谨慎开启",
      "key": 21,
      "rules": [
        {
          "matches": "@View[childCount<5][bottom<2000] > [text^=\"广告\"][text.length<4][visibleToUser=true]",
          "excludeMatches": [
            "[text=\"不感兴趣\" || text=\"与我无关\" || text=\"感谢你的反馈\"][visibleToUser=true]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642232",
            "https://i.gkd.li/i/13199281",
            "https://i.gkd.li/i/14006180",
            "https://i.gkd.li/i/17093010",
            "https://i.gkd.li/i/16796663",
            "https://i.gkd.li/i/16796725",
            "https://i.gkd.li/i/16798663",
            "https://i.gkd.li/i/15198455",
            "https://i.gkd.li/i/17276697"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15198464"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37",
            "https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58"
          ]
        },
        {
          "matches": "[text=\"关闭此广告\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16796729",
            "https://i.gkd.li/i/17113565"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "excludeMatches": [
            "[text=\"感谢你的反馈\"][visibleToUser=true]",
            "[text=\"关闭此广告\"][visibleToUser=true]"
          ],
          "preKeys": [
            0
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16796666",
            "https://i.gkd.li/i/16798661",
            "https://i.gkd.li/i/15198459"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15061424",
            "https://i.gkd.li/i/16796729"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        },
        {
          "matches": "[text=\"与我无关\"][visibleToUser=true]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/16796674",
            "https://i.gkd.li/i/16796732",
            "https://i.gkd.li/i/16798658",
            "https://i.gkd.li/i/15198461"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "功能类-自动点击[查看原视频]",
      "key": 22,
      "rules": [
        {
          "matches": "[text^=\"查看原视频\"][visibleToUser=true]",
          "activityIds": ".ui.chatting.gallery.ImageGalleryUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16833732",
          "exampleUrls": "https://e.gkd.li/5332aff9-05bb-4b44-b832-5e2d9b1c1270",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-小程序弹窗广告",
      "desc": "点击关闭",
      "matchTime": 20000,
      "actionCd": 300,
      "actionDelay": 300,
      "key": 23,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text=\"广告\"]",
          "excludeMatches": "[text=\"跳过\"][visibleToUser=true]",
          "activityIds": ".plugin.appbrand.ui.AppBrandUI",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13459614",
            "https://i.gkd.li/i/16943989",
            "https://i.gkd.li/i/16920797"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16958795",
          "exampleUrls": "https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31",
          "key": 0
        },
        {
          "matches": "@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text=\"广告\"]",
          "excludeMatches": "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]",
          "activityIds": ".plugin.appbrand.ui.AppBrandUI",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13459614",
            "https://i.gkd.li/i/16943989",
            "https://i.gkd.li/i/16920797"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16958795",
          "exampleUrls": "https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动语音转文字",
      "desc": "点击语音旁边的转文字",
      "enable": false,
      "fastQuery": true,
      "key": 24,
      "rules": [
        {
          "matches": "@RelativeLayout[clickable=true] -2 FrameLayout >2 [desc^=\"语音\" && desc$=\"未播放\"] + [text^=\"0\" || text^=\"1\" || text^=\"2\" || text^=\"3\" || text^=\"4\" || text^=\"5\" || text^=\"6\" || text^=\"7\" || text^=\"8\" || text^=\"9\"]",
          "activityIds": [
            ".ui.LauncherUI",
            ".ui.chatting.ChattingUI",
            ".ui.chatting.variants.ChattingMainUI"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/18135057",
            "https://i.gkd.li/i/24989479"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18135054",
          "key": 0
        },
        {
          "matches": "@* > [text=\"转文字\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14497389",
            "https://i.gkd.li/i/14538322"
          ]
        },
        {
          "anyMatches": [
            "@[clickable=true] >(1,2) [text=\"转文字\"]",
            "@[clickable=true] -2 FrameLayout >2 [desc^=\"语音\" && desc$=\"未播放\"] + [text~=\"(?is)[0-9].*\"]"
          ],
          "activityIds": [
            ".ui.LauncherUI",
            ".ui.chatting.ChattingUI",
            ".ui.chatting.variants.ChattingMainUI"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14497389",
            "https://i.gkd.li/i/14538322",
            "https://i.gkd.li/i/19774491",
            "https://i.gkd.li/i/19792042",
            "https://i.gkd.li/i/18135057",
            "https://i.gkd.li/i/24989479",
            "https://i.gkd.li/i/25002786"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/21792783"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-语音/视频通话呼入10秒后自动点击接听",
      "key": 25,
      "rules": [
        {
          "matches": "Button[desc=\"接听\"][visibleToUser=true]",
          "actionDelay": 10000,
          "activityIds": [
            ".plugin.voip.ui.VideoActivity",
            ".ui.LauncherUI"
          ],
          "matchTime": 15000,
          "snapshotUrls": [
            "https://i.gkd.li/i/18225086",
            "https://i.gkd.li/i/23295677"
          ],
          "exampleUrls": "https://e.gkd.li/fbfea6ba-ce43-4641-a919-9c21fa49dc73",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-点击语音条菜单里的转文字",
      "desc": "点击 长按语音条后弹出的菜单 中的转文字",
      "key": 26,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"转文字\"]",
          "activityIds": [
            ".ui.LauncherUI",
            ".ui.chatting.ChattingUI",
            ".ui.chatting.variants.ChattingMainUI"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19774491",
            "https://i.gkd.li/i/19792042",
            "https://i.gkd.li/i/25002786"
          ],
          "exampleUrls": "https://e.gkd.li/c35fafc8-9d96-4178-9aac-f16394d2c666",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动接龙",
      "desc": "手动点接龙后点击加号再点击发送",
      "fastQuery": true,
      "key": 27,
      "rules": [
        {
          "matches": "@[desc=\"添加\"] -n LinearLayout > [text^=\"由\"][text*=\"发起接龙\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/21705413",
          "exampleUrls": "https://e.gkd.li/5f446d2a-432f-4dca-9bb7-81eba83713c6"
        },
        {
          "matches": "@[text=\"发送\"] < LinearLayout < LinearLayout < LinearLayout - [vid=\"actionbar_up_indicator\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/21705384",
          "exampleUrls": "https://e.gkd.li/30f0f903-0a1a-422e-991c-02b7cbedc2da",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动点击未读消息（头像右上角为数字）",
      "key": 28,
      "rules": [
        {
          "matches": "TextView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".ui.LauncherUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23737039",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击未读消息（头像右上角为红点）",
      "key": 29,
      "rules": [
        {
          "matches": "ImageView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".ui.LauncherUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23737039",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动允许打开外部应用",
      "desc": "点击允许",
      "key": 30,
      "rules": [
        {
          "matches": [
            "[text^=\"即将离开微信\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24161524",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"即将离开微信\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".plugin.webview.ui.tools.MMWebViewUI",
            ".ui.chatting.AppAttachNewDownloadUI"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/24161524",
            "https://i.gkd.li/i/26024460"
          ],
          "exampleUrls": "https://e.gkd.li/e48afed5-a42b-4167-b2f3-e0e89eb57645",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-微信红包自动领取",
      "desc": "自动领取私聊红包,群聊红包",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "ImageView[desc=\"返回\"]",
          "preKeys": [
            1,
            2
          ],
          "activityIds": [
            "com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI",
            "com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyDetailUI"
          ],
          "name": "从红包结算界面返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/12567696",
            "https://i.gkd.li/i/14151190"
          ],
          "key": 0
        },
        {
          "matches": "ImageButton[desc=\"开\"] + Button[desc=\"开\"]",
          "activityIds": "com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI",
          "key": 1,
          "name": "点击红包-开",
          "snapshotUrls": [
            "https://i.gkd.li/i/12567697",
            "https://i.gkd.li/i/12567698"
          ]
        },
        {
          "matches": "LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text=\"微信红包\"][id!=null]",
          "activityIds": "com.tencent.mm.ui.LauncherUI",
          "key": 2,
          "name": "点击别人发的红包",
          "snapshotUrls": "https://i.gkd.li/i/12567637"
        },
        {
          "matches": "ImageView[desc=\"返回\"]",
          "preKeys": [
            1,
            2
          ],
          "activityIds": "com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI",
          "name": "从红包结算界面返回",
          "snapshotUrls": "https://i.gkd.li/import/12567696",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-订阅号消息页面-推荐阅读",
      "enable": false,
      "key": 32,
      "rules": [
        {
          "matches": "View > Button > View[desc$=\"推​荐​\"] > ImageView[index=1][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14548701",
          "exampleUrls": "https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea"
        },
        {
          "matches": "[desc=\"不看此类内容\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14549566"
        },
        {
          "matches": "[desc=\"确定\"]",
          "preKeys": 1,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14549567"
        }
      ]
    },
    {
      "name": "全屏广告-小程序-弹窗广告",
      "desc": "点击右上角x",
      "enable": false,
      "key": 33,
      "rules": [
        {
          "matches": "[text!=\"\" || text!=null] <<n FrameLayout[childCount<=5] > FrameLayout[childCount>=3 && childCount<=6] + FrameLayout[childCount=2] > TextView + FrameLayout > @FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14111422",
            "https://i.gkd.li/i/14111432",
            "https://i.gkd.li/i/13459614"
          ],
          "exampleUrls": "https://m.gkd.li/101449500/1c7e1778-c5a2-426b-8beb-1b76893b6397"
        }
      ]
    },
    {
      "name": "分段广告-小程序-内部广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 34,
      "rules": [
        {
          "matches": "FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "FrameLayout > TextView + FrameLayout > TextView[text=\"跳过\"]",
          "fastQuery": true,
          "key": 0,
          "name": "【广告】0",
          "snapshotUrls": [
            "https://i.gkd.li/i/13199282",
            "https://i.gkd.li/i/13407275"
          ]
        },
        {
          "matches": "View > * - [text=\"广告\"]",
          "excludeMatches": "[text=\"接龙管家\"]",
          "key": 1,
          "name": "【广告】1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13378208",
            "https://i.gkd.li/i/14123141",
            "https://i.gkd.li/i/14385715"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            4,
            5
          ],
          "key": 2,
          "name": "点击原因【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/13200044"
        },
        {
          "matches": "[text=\"与我无关\"][visibleToUser=true]",
          "preKeys": 2,
          "key": 3,
          "name": "点击原因【与我无关】",
          "snapshotUrls": "https://i.gkd.li/i/13200048"
        },
        {
          "matches": "FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "FrameLayout > TextView + FrameLayout > TextView[text=\"跳过\"]",
          "key": 4,
          "name": "【广告】0",
          "snapshotUrls": [
            "https://i.gkd.li/import/13199282",
            "https://i.gkd.li/import/13407275"
          ]
        },
        {
          "matches": "Image[text=\"feedback_icon\"] - [text=\"广告\"]",
          "key": 5,
          "name": "【广告】1",
          "snapshotUrls": "https://i.gkd.li/import/13378208"
        }
      ]
    },
    {
      "name": "分段广告-视频号-评论区广告",
      "desc": "GKD1.7.0可用",
      "enable": false,
      "fastQuery": true,
      "key": 35,
      "rules": [
        {
          "matches": "@FrameLayout >2 [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14549072",
          "exampleUrls": "https://m.gkd.li/101449500/341ffb52-0aeb-4c35-aa72-8c96930e6d23"
        },
        {
          "matches": "@ViewGroup >3 [text=\"广告\"]",
          "position": {
            "left": "width*0.8125",
            "top": "width*0.1875"
          },
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14549071",
          "exampleUrls": "https://m.gkd.li/101449500/f2dcd634-96e3-4532-9b24-7c750ffd0263"
        }
      ]
    },
    {
      "name": "青少年模式-视频号-青少年模式弹窗",
      "enable": false,
      "fastQuery": true,
      "order": -8,
      "key": 36,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] +3 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-微信设备快捷登录",
      "desc": "自动点击[登录]Win/Mac/平板/手表等客户端",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 37,
      "rules": [
        {
          "matches": "RelativeLayout[vid!=null][left!=0] > ImageView[width = height] + TextView[text^=\"登录\" || text^=\"登入\" || text^=\"Log in to Weixin for\"][visibleToUser=true] +n * > Button[text=\"登录\" || text=\"登入\" || text=\"Log In\"][visibleToUser=true]",
          "activityIds": [
            ".plugin.webwx.ui.ExtDeviceWXLoginUI",
            ".ui.LauncherUI"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13522625",
            "https://i.gkd.li/i/13522577",
            "https://i.gkd.li/i/22356438",
            "https://i.gkd.li/i/25315046",
            "https://i.gkd.li/i/25815630",
            "https://i.gkd.li/i/32761015"
          ],
          "exampleUrls": "https://e.gkd.li/4434dd75-1c9c-4c4a-a6fb-47490b751ec4",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动领取红包",
      "desc": "自动领取私聊红包,群聊红包",
      "enable": false,
      "fastQuery": true,
      "key": 38,
      "rules": [
        {
          "matches": "LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >3 [childCount=1] <2 LinearLayout +(1,2) RelativeLayout > [text=\"微信红包\"]",
          "activityIds": [
            ".ui.LauncherUI",
            ".ui.chatting.variants.ChattingMainUI"
          ],
          "key": 0,
          "name": "点击别人发的红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134826",
            "https://i.gkd.li/i/24347101",
            "https://i.gkd.li/i/26586606"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18134823",
            "https://i.gkd.li/i/18134833"
          ]
        },
        {
          "matches": "@Button[desc=\"开\" || desc=\"開\"] -(2,3) LinearLayout >2 [text$=\"红包\" || text$=\"紅包\"]",
          "preKeys": [
            0
          ],
          "activityIds": ".plugin.luckymoney.ui.LuckyMoney",
          "matchRoot": true,
          "key": 1,
          "name": "点击红包-开",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134828",
            "https://i.gkd.li/i/21177180",
            "https://i.gkd.li/i/25901145",
            "https://i.gkd.li/i/25315061"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/12567698"
        },
        {
          "matches": "@ImageView[desc=\"返回\"] +n LinearLayout >8 [text$=\"红包\" || text$=\"紅包\"]",
          "preKeys": [
            0,
            3
          ],
          "activityIds": ".plugin.luckymoney.ui.LuckyMoney",
          "name": "从红包结算界面返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134829",
            "https://i.gkd.li/i/18135031",
            "https://i.gkd.li/i/23825631",
            "https://i.gkd.li/i/24414957",
            "https://i.gkd.li/i/25315062"
          ],
          "key": 2
        },
        {
          "matches": "@Button[desc=\"开\" || desc=\"開\"] -(2,3) LinearLayout >2 [text$=\"红包\" || text$=\"紅包\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            ".plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI",
            ".plugin.luckymoney.ui.LuckyMoneyNewReceiveUI"
          ],
          "matchRoot": true,
          "key": 3,
          "name": "点击红包-开",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134828",
            "https://i.gkd.li/i/21177180",
            "https://i.gkd.li/i/25901145",
            "https://i.gkd.li/i/25315061"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/12567698"
        },
        {
          "matches": "@ImageView[desc=\"返回\"] +n LinearLayout >8 [text$=\"红包\" || text$=\"紅包\"]",
          "preKeys": [
            0,
            3
          ],
          "activityIds": [
            ".plugin.luckymoney.ui.LuckyMoneyDetailUI",
            ".plugin.luckymoney.ui.LuckyMoneyNewDetailUI"
          ],
          "name": "从红包结算界面返回",
          "snapshotUrls": [
            "https://i.gkd.li/i/18134829",
            "https://i.gkd.li/i/18135031",
            "https://i.gkd.li/i/23825631",
            "https://i.gkd.li/i/24414957",
            "https://i.gkd.li/i/25315062"
          ],
          "key": 4
        }
      ]
    },
    {
      "name": "功能类-自动[关闭]已抢完的红包",
      "desc": "点击x掉",
      "key": 39,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - [visibleToUser=true] >3 [text^=\"手慢了\"][text*=\"红包\"][text.length<15]",
          "activityIds": ".plugin.luckymoney.ui.LuckyMoneyNewReceiveUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33950144",
          "exampleUrls": "https://e.gkd.li/4786186b-49ab-44e5-b3b1-c3b78db4802b",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[选中]发送原图",
      "desc": "自动选中底部中间的发送原图，可手动取消勾选",
      "actionMaximum": 1,
      "actionMaximumKey": 1,
      "fastQuery": true,
      "key": 40,
      "rules": [
        {
          "matches": "@[clickable=true][desc^=\"未选中\" || desc^=\"未選定\" || desc^=\"Unselected\"] + [text=\"原图\" || text=\"原圖\" || text=\"Full Image\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16987145",
            "https://i.gkd.li/i/16987144"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16987147",
            "https://i.gkd.li/i/27852606"
          ]
        },
        {
          "matches": "@[clickable=true] > [checkable=true][checked=false] + [text=\"原图\" || text=\"原圖\" || text=\"Full Image\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/32857934",
            "https://i.gkd.li/i/33297749"
          ],
          "exampleUrls": [
            "https://e.gkd.li/150dd5c1-6425-4d36-b4a2-b42a9f27c40c",
            "https://e.gkd.li/d46da56a-5382-4714-bcfd-89856f9aa309"
          ]
        },
        {
          "matches": "[clickable=true][desc^=\"未选中\" || desc^=\"未選定\" || desc^=\"Unselected\"][!(desc*=\"选择\")][text=null]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/27852612",
            "https://i.gkd.li/i/19625049"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16987141",
            "https://i.gkd.li/i/29746331"
          ]
        }
      ]
    },
    {
      "name": "功能类-收款后自动[返回]",
      "desc": "已收款,点击左上角退出该界面",
      "key": 41,
      "rules": [
        {
          "matches": [
            "[text*=\"已收款\"] + [text^=\"¥\"]",
            "[vid=\"actionbar_up_indicator\"][clickable=true]"
          ],
          "activityIds": ".plugin.remittance.ui.RemittanceDetailUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31040687",
          "exampleUrls": "https://e.gkd.li/49b2d5ee-74a4-48e2-818a-8d3ef4c98930",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-文件自动预览",
      "desc": "未下载文件-点击预览",
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 42,
      "rules": [
        {
          "matches": "[text^=\"14天内可以预览\"] - [text=\"下载\"] - [text=\"预览\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.container.MMCommonActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/25832752",
            "https://i.gkd.li/i/25832868"
          ],
          "exampleUrls": [
            "https://e.gkd.li/51a4f07b-ca93-46f4-b301-9ed197862d96",
            "https://e.gkd.li/c4e42c3b-a071-427b-9a4c-a1035421836c"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-文件自动app打开",
      "desc": "办公文档点下面第一个(默认)app打开",
      "actionCd": 2000,
      "fastQuery": true,
      "key": 43,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true][index=0][childCount=2] < RecyclerView - [text=\"用QQ浏览器打开\"][visibleToUser=true]",
          "activityIds": ".ui.chatting.AppAttachNewDownloadUI",
          "snapshotUrls": "https://i.gkd.li/i/26024073",
          "exampleUrls": "https://e.gkd.li/13608598-f371-467a-8162-354110b8c79f",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动清缓存",
      "desc": "存储空间页-清理x2-完成⚠️小程序重要数据慎用",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 44,
      "rules": [
        {
          "matches": "@Button[text^=\"清\" || text=\"Clear\"][clickable=true][visibleToUser=true] -n [text=\"缓存\" || text=\"快取\" || text=\"Cache\"]",
          "key": 0,
          "name": "清理",
          "snapshotUrls": [
            "https://i.gkd.li/i/26159733",
            "https://i.gkd.li/i/26162844"
          ],
          "exampleUrls": "https://e.gkd.li/0e5e1dfa-f0c2-4823-bb3c-33d23ac2d122"
        },
        {
          "matches": "@Button[clickable=true] < FrameLayout -2 [text*=\"估\" || text=\"Estimated\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "确认清理",
          "snapshotUrls": "https://i.gkd.li/i/26159823",
          "exampleUrls": "https://e.gkd.li/ac107188-5b53-4d25-9e81-0f5266470300"
        },
        {
          "matches": "LinearLayout > @Button[clickable=true][visibleToUser=true] - [text=\"取消\" || text=\"Cancel\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "name": "再次确认",
          "snapshotUrls": "https://i.gkd.li/i/26223829",
          "exampleUrls": "https://e.gkd.li/7f1a36d0-46a2-49fc-93f2-7f5672cb8dc1"
        },
        {
          "matches": "LinearLayout[childCount=5] > [text=\"我知道了\" || text=\"Got It\"][clickable=true]",
          "preKeys": [
            1
          ],
          "name": "完成",
          "snapshotUrls": [
            "https://i.gkd.li/i/26159824",
            "https://i.gkd.li/i/26162845"
          ],
          "exampleUrls": "https://e.gkd.li/a83a2fb8-19ac-4a2f-aa08-03d5921d9328",
          "key": 3
        }
      ]
    },
    {
      "name": "功能类-快速切换账号",
      "desc": "适合俩账号的使用再多无法确认是否可行",
      "actionMaximum": 2,
      "resetMatch": "app",
      "key": 45,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] < @FrameLayout[clickable=true] <n LinearLayout - RelativeLayout > [text$=\"以切换账号\"][visibleToUser=true]",
          "activityIds": ".plugin.setting.ui.setting.SettingsSwitchAccountUI",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/26159956",
            "https://i.gkd.li/i/29710717"
          ],
          "exampleUrls": "https://e.gkd.li/0ee723f0-e6e5-4018-9cfa-7a8de22b91e1",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-直接定位到聊天位置",
      "desc": "点引用消息-定位到聊天位置(左下角)",
      "key": 46,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] - * ->2 TextView[visibleToUser=true] < * < ScrollView < * < * < * < [id=\"android:id/content\"]",
          "activityIds": ".ui.chatting.TextPreviewUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26310231",
          "exampleUrls": "https://e.gkd.li/9b2b5ed6-bf1d-4b13-aba5-b51e978df562",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-语音通话时自动开[扬声器]",
      "desc": "⚠️ 1分钟内接听有效",
      "key": 47,
      "rules": [
        {
          "matches": "@Button[desc=\"扬声器已关\"] <n View[childCount>8] < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionCd": 3000,
          "activityIds": ".plugin.voip.ui.VideoActivity",
          "forcedTime": 60000,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27175638",
          "excludeSnapshotUrls": "https://i.gkd.li/i/27175665",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-Web风险警告[继续访问]",
      "desc": "自动点击继续访问",
      "matchTime": 10000,
      "key": 48,
      "rules": [
        {
          "matches": "[text=\"将要访问\"] +2 [text^=\"该网页可能存在\"] + Button[text=\"继续访问\"][visibleToUser=true]",
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "snapshotUrls": "https://i.gkd.li/i/28023822",
          "exampleUrls": "https://e.gkd.li/d1aaa9d9-e7a1-4007-bb48-2b5f0faa346b",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-其他应用打开使用功能须知",
      "desc": "直接确认不墨迹",
      "key": 49,
      "rules": [
        {
          "matches": "@[text=\"确认\" || text=\"確定\" || text=\"OK\"] <2 [childCount=2] - ScrollView >2 [visibleToUser=true][text*=\"《其他应用打开\"] - [text=\"功能使用须知\"]",
          "activityIds": ".ui.chatting.AppAttachNewDownloadUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28420481",
          "exampleUrls": "https://e.gkd.li/ad334a60-8a62-41f2-b123-e4a137daa89e",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-暂不开启指纹支付",
      "desc": "支付后出现全屏弹窗=> 点击[暂不开启]",
      "key": 50,
      "rules": [
        {
          "matches": "@Button[desc=\"暂不开启\"][visibleToUser=true] - * -> [desc=\"开启指纹支付\"] <<2 * <n [childCount>3] <<6 [id=\"android:id/content\"]",
          "activityIds": ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28420693",
          "exampleUrls": "https://e.gkd.li/95edbe33-86d4-4075-99e1-cec1a6609595",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-撤回消息自动重新编辑",
      "desc": "只点击一次(切换界面重置次数),日常情况够用",
      "actionMaximum": 1,
      "key": 51,
      "rules": [
        {
          "matches": "@TextView[clickable=true][text$=\"重新编辑\"][visibleToUser=true] <<2 LinearLayout <n RecyclerView <2 * <<2 * <4 * < * <2 * - FrameLayout >4 [vid=\"actionbar_up_indicator\"]",
          "activityIds": ".ui.LauncherUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28559913",
          "exampleUrls": "https://e.gkd.li/d1813063-6580-4adc-be28-93226969e63b",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-支付前[取消]开通免密支付",
      "desc": "支付前,[关掉]默认开通免密支付的开关",
      "actionMaximum": 1,
      "key": 52,
      "rules": [
        {
          "matches": "@Button[desc^=\"开通\"][desc*=\"免密支付\"][desc$=\"打开\"] <2 View[childCount=8] <<7 FrameLayout <<3 [id=\"android:id/content\"]",
          "position": {
            "right": "width * 0.1",
            "top": "height/2"
          },
          "activityIds": "com.tencent.mm.plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29682457",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29682465",
          "exampleUrls": "https://e.gkd.li/59fb8537-9721-459a-992d-1d1e58d9c29f",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-付款时点击[使用面容]",
      "desc": "由[输密码]切换到[刷脸]",
      "key": 53,
      "rules": [
        {
          "matches": [
            "[vid=\"tenpay_keyboard_1\"][visibleToUser=true]",
            "[desc=\"使用面容\"]"
          ],
          "activityIds": ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30642415",
          "exampleUrls": "https://e.gkd.li/0cb6496a-860e-41a5-b58a-16e07cc0214a",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-登录-平板同时登",
      "desc": "自动点击[平板和手机同时登录]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 54,
      "rules": [
        {
          "matches": "@Button[text=\"平板和手机同时登录\"] - LinearLayout >3 [text=\"登录\"]",
          "snapshotUrls": "https://i.gkd.li/i/32757828",
          "exampleUrls": "https://e.gkd.li/c3ca6901-9b7d-47d3-b879-69b615f8d09b",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-登录自动授权",
      "desc": "微信相关平台扫码登录自动授权",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 2,
      "key": 55,
      "rules": [
        {
          "matches": [
            "[text^=\"登录 Win\" || text^=\"登录 Mac\" || text^=\"登录桌面\" || text^=\"登入 WeChat\" || text^=\"登入 微信\" || text^=\"Log in to Weixin for\"][visibleToUser=true]",
            "[text=\"登录\" || text=\"登入\" || text=\"Log In\"][visibleToUser=true]"
          ],
          "key": 0,
          "name": "PC 微信扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/import/13522625",
            "https://i.gkd.li/import/13522577",
            "https://i.gkd.li/i/19399694",
            "https://i.gkd.li/i/22356438",
            "https://i.gkd.li/i/25315046",
            "https://i.gkd.li/i/25815630",
            "https://i.gkd.li/i/26865671"
          ]
        },
        {
          "matches": [
            "[text^=\"获取你的\"||text^=\"取得你的\"||text^=\"申请使用\"||text^=\"請求使用\"]",
            "[text=\"允许\"||text=\"允許\"]"
          ],
          "key": 1,
          "name": "浏览器扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/import/13065462",
            "https://i.gkd.li/import/12663602",
            "https://i.gkd.li/import/14164920",
            "https://i.gkd.li/i/15271716",
            "https://i.gkd.li/i/18809991",
            "https://i.gkd.li/i/19496823",
            "https://i.gkd.li/i/21792855",
            "https://i.gkd.li/i/16972565"
          ]
        },
        {
          "matches": "[text=\"打开网页版文件传输助手\"||text=\"開啟網頁版檔案傳輸助手\"] + * > Button[text=\"打开\"||text=\"開啟\"]",
          "key": 2,
          "name": "网页版文件传输助手扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/import/12793745",
            "https://i.gkd.li/i/20532303"
          ]
        },
        {
          "matches": "View[desc=\"取消登录\"||desc=\"取消登入\"] - Button[text=\"登录\"||text=\"登入\"]",
          "key": 3,
          "name": "微信表情开发平台扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/import/14164954"
          ]
        },
        {
          "matches": "Button[text=\"取消\"] - Button[text=\"确定\"]",
          "key": 4,
          "name": "微信红包封面开放平台扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/import/14164990"
          ]
        },
        {
          "matches": "[desc=\"取消\"] - [desc=\"确认登录\"]",
          "key": 5,
          "name": "微信开发者工具扫码登录",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472990"
          ]
        },
        {
          "matches": "[text=\"微信读书网页版\"] +3 Button[text=\"登 录\"]",
          "key": 6,
          "name": "微信读书网页版扫码登录",
          "snapshotUrls": "https://i.gkd.li/import/12506197"
        },
        {
          "matches": [
            "[text=\"登录成功\"||text=\"已确定\"]",
            "ImageView[desc=\"返回\"]"
          ],
          "preKeys": [
            4,
            6
          ],
          "key": 7,
          "name": "点击[X]返回",
          "snapshotUrls": [
            "https://i.gkd.li/import/14193413",
            "https://i.gkd.li/import/12506201"
          ]
        },
        {
          "matches": [
            "[text=\"申请获得\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "preKeys": [
            1
          ],
          "activityIds": ".plugin.webview.ui.tools.SDKOAuthOtherUI",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/24560465"
        }
      ]
    },
    {
      "name": "分段广告-订阅号文章广告",
      "desc": "点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]",
      "enable": false,
      "matchRoot": true,
      "key": 56,
      "rules": [
        {
          "matches": [
            "[name$=\".View\"||name$=\".TextView\"][text^=\"广告\"][visibleToUser=true] <n @View < View[childCount=1] <<3 View[childCount=1] <<2 View[childCount=1]"
          ],
          "excludeMatches": "[text=\"感谢你的反馈\"][visibleToUser=true]",
          "key": 0,
          "name": "点击「广告」按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642232",
            "https://i.gkd.li/import/13199281",
            "https://i.gkd.li/import/14006180",
            "https://i.gkd.li/import/12714427",
            "https://i.gkd.li/import/12700183",
            "https://i.gkd.li/import/12714424",
            "https://i.gkd.li/import/14293295",
            "https://i.gkd.li/i/17093010",
            "https://i.gkd.li/i/14802057",
            "https://i.gkd.li/i/16798663",
            "https://i.gkd.li/i/15198413",
            "https://i.gkd.li/i/15198455",
            "https://i.gkd.li/i/17276697"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/12678937",
            "https://i.gkd.li/import/12646837",
            "https://i.gkd.li/import/12642234",
            "https://i.gkd.li/import/12722301",
            "https://i.gkd.li/import/12722331",
            "https://i.gkd.li/import/14006203",
            "https://i.gkd.li/import/12701503",
            "https://i.gkd.li/import/14292844",
            "https://i.gkd.li/i/15198464"
          ]
        },
        {
          "matches": "[text*=\"广告\"&&text.length<5] <n View < View >n [text=\"关闭此广告\"][visibleToUser=true]",
          "excludeMatches": "[text=\"感谢你的反馈\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "activityIds": [],
          "key": 1,
          "name": "点击「关闭此广告」",
          "snapshotUrls": [
            "https://i.gkd.li/import/12745280",
            "https://i.gkd.li/import/14293434",
            "https://i.gkd.li/import/12700191",
            "https://i.gkd.li/i/14633366",
            "https://i.gkd.li/i/14834975",
            "https://i.gkd.li/i/16798661",
            "https://i.gkd.li/i/15198422",
            "https://i.gkd.li/i/15198459",
            "https://i.gkd.li/i/16796729"
          ]
        },
        {
          "matches": "[text*=\"广告\"&&text.length<5] <<n View >n [text=\"与我无关\"||text=\"不感兴趣\"||text=\"关闭此广告\"][visibleToUser=true]",
          "excludeMatches": "[text=\"感谢你的反馈\"][visibleToUser=true]",
          "preKeys": [
            0,
            4
          ],
          "activityIds": [],
          "key": 2,
          "name": "点击「不感兴趣」",
          "snapshotUrls": [
            "https://i.gkd.li/i/17113565",
            "https://i.gkd.li/i/18702161",
            "https://i.gkd.li/i/18702159",
            "https://i.gkd.li/i/18702157"
          ]
        },
        {
          "matches": "[text*=\"广告\"&&text.length<5] <<n View >n [text=\"与我无关\"||text=\"不感兴趣\"||text=\"关闭此广告\"][visibleToUser=true]",
          "action": "clickCenter",
          "preKeys": [
            0,
            4,
            5
          ],
          "activityIds": [],
          "key": 3,
          "name": "点击「与我无关」",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642238",
            "https://i.gkd.li/import/14006206",
            "https://i.gkd.li/i/15198461",
            "https://i.gkd.li/i/16798658",
            "https://i.gkd.li/i/18108538",
            "https://i.gkd.li/i/19121995",
            "https://i.gkd.li/i/19281051"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15061424"
          ]
        },
        {
          "matches": [
            "View[id=\"ad_container\"] > View[childCount=1] >n @View > [id=null][text^=\"广告\"][visibleToUser=true]"
          ],
          "key": 4,
          "name": "广告类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642232",
            "https://i.gkd.li/import/13199281",
            "https://i.gkd.li/import/12646837",
            "https://i.gkd.li/import/12678937",
            "https://i.gkd.li/import/12714427"
          ]
        },
        {
          "matches": "View[childCount=1] > @[id=\"feedbackTagContainer\"][visibleToUser=true] > [id=\"feedbackTag\"]",
          "key": 5,
          "name": "广告类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700183",
            "https://i.gkd.li/import/12701503",
            "https://i.gkd.li/import/12714424"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动查看原图/原视频",
      "desc": "浏览图片时自动切换至原图模式",
      "enable": false,
      "fastQuery": true,
      "key": 57,
      "rules": [
        {
          "matches": [
            "Button[text~=\".*原.*\\\\d+(\\\\.\\\\d+)?\\\\s*[KMG]B?\\\\)?$\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13523031",
            "https://i.gkd.li/i/14661736",
            "https://i.gkd.li/i/16833732",
            "https://i.gkd.li/i/17698956",
            "https://i.gkd.li/i/19515095",
            "https://i.gkd.li/i/19645122",
            "https://i.gkd.li/i/25009442"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-小程序部分通用广告",
      "desc": "包括部分开屏广告，弹窗广告等",
      "enable": false,
      "matchTime": 10000,
      "key": 58,
      "rules": [
        {
          "matches": [
            "[text=\"广告\" || text=\"廣告\"][visibleToUser=true]",
            "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]"
          ],
          "actionDelay": 800,
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "name": "开屏广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12701979",
            "https://i.gkd.li/import/12777076",
            "https://i.gkd.li/import/12785012",
            "https://i.gkd.li/import/12785183",
            "https://i.gkd.li/import/13306883",
            "https://i.gkd.li/import/12785246",
            "https://i.gkd.li/import/13407275",
            "https://i.gkd.li/i/15108441"
          ]
        },
        {
          "matches": [
            "ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >(4,5) [text=\"广告\"||text=\"查看详情\"]"
          ],
          "excludeMatches": "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]",
          "actionDelay": 300,
          "actionCd": 300,
          "matchTime": 20000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "name": "弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459614",
            "https://i.gkd.li/i/16943989",
            "https://i.gkd.li/i/16920797",
            "https://i.gkd.li/import/12926021"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16958795"
        },
        {
          "matches": "View[childCount=8] > View[index=6] > View[childCount=4] > Image[visibleToUser=true]",
          "actionDelay": 500,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "key": 2,
          "name": "京东购物小程序-低价包邮广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13298294",
            "https://i.gkd.li/import/14156176"
          ]
        },
        {
          "matches": "@TextView[text*=\"跳过\"] < View < * < WebView < * < * < * < * < * < * < * < * < * <2 FrameLayout[childCount=2] < * < [id=\"android:id/content\"]",
          "actionCd": 500,
          "matchRoot": true,
          "key": 3,
          "name": "开屏广告-2",
          "snapshotUrls": "https://i.gkd.li/i/26677309"
        }
      ]
    },
    {
      "name": "分段广告-订阅号消息页面广告",
      "desc": "自动点击“x”",
      "enable": false,
      "key": 59,
      "rules": [
        {
          "matches": "View[childCount>=2][desc!=\"发现\"] >n [name$=\"View\"][desc.length>=1][desc!=\"发现\"] - View[desc$=\"推​荐​\" || desc$=\"推​薦​\"][childCount>=2][desc!=\"发现\"] > ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)][width<100&&height<100][clickable=true]",
          "key": 0,
          "name": "点击[X]-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/14436176",
            "https://i.gkd.li/i/14392392",
            "https://i.gkd.li/i/14548701",
            "https://i.gkd.li/i/22870358"
          ]
        },
        {
          "matches": "Button[desc.length>0][childCount>=2][desc.length>=1] > ImageView[desc.length>=1][childCount>0] + @ImageView[index!=0][clickable=true][visibleToUser=true][width<100&&height<100][clickable=true] + View[desc.length=null]",
          "key": 1,
          "name": "点击[X]-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/22870407",
            "https://i.gkd.li/i/22870408",
            "https://i.gkd.li/i/22870410",
            "https://i.gkd.li/i/23693851",
            "https://i.gkd.li/i/23832813"
          ]
        },
        {
          "anyMatches": [
            "[desc=\"不喜欢此类视频\"][clickable=true]",
            "[desc=\"不看此类内容\"][clickable=true]",
            "[desc=\"不看此類內容\"][clickable=true]",
            "[desc=\"不看此官方賬號內容\"][clickable=true]"
          ],
          "preKeys": [
            0,
            1
          ],
          "activityIds": [],
          "key": 2,
          "name": "点击[不喜欢此类视频]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14444654",
            "https://i.gkd.li/i/14549566",
            "https://i.gkd.li/i/21343537",
            "https://i.gkd.li/i/22870531",
            "https://i.gkd.li/i/22870532"
          ]
        },
        {
          "matches": "[desc=\"确定\"||desc=\"確定\"][clickable=true]",
          "preKeys": 2,
          "activityIds": [],
          "key": 3,
          "name": "点击[确定]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14436190",
            "https://i.gkd.li/i/14549567",
            "https://i.gkd.li/i/21343507",
            "https://i.gkd.li/i/21792697",
            "https://i.gkd.li/i/22870535"
          ]
        }
      ]
    },
    {
      "name": "功能类-收款付款后自动点击完成/返回",
      "desc": "支付完成后自动点击完成或返回按钮",
      "enable": false,
      "matchRoot": true,
      "fastQuery": true,
      "key": 60,
      "rules": [
        {
          "matches": [
            "[text=\"支付成功\"||text*=\"已收款\"||desc=\"支付成功\"||desc*=\"已收款\"]",
            "[text*=\"￥\"||text*=\"¥\"||desc*=\"￥\"||desc*=\"¥\"]",
            "[text=\"完成\"||text=\"返回商家\"||desc=\"完成\"||desc=\"返回商家\"||vid=\"actionbar_up_indicator\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14399355",
            "https://i.gkd.li/i/14558398",
            "https://i.gkd.li/i/14662147",
            "https://i.gkd.li/i/16215946",
            "https://i.gkd.li/i/18348017",
            "https://i.gkd.li/i/31693084"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14532946"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-朋友圈广告[英文]",
      "desc": "点击广告卡片右上角[Sponsored],直接关闭/出现菜单点击[Close the ad],确认关闭",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 61,
      "rules": [
        {
          "matches": "ImageView - TextView[text=\"Sponsored\"][clickable=true][id!=null]",
          "key": 0,
          "name": "点击广告卡片右上角[Sponsored]",
          "snapshotUrls": "https://i.gkd.li/import/12905837"
        },
        {
          "matches": "@LinearLayout[clickable=true][childCount=2] > TextView[text=\"Close the ad\"]",
          "preKeys": 0,
          "key": 1,
          "name": "Sponsored story-点击[Close the ad]",
          "snapshotUrls": "https://i.gkd.li/import/12905838"
        },
        {
          "matches": "[text=\"Reason for closing the ad\"] +(2) [text=\"Close\"]",
          "preKeys": 1,
          "key": 2,
          "name": "Reason for closing the ad - 点击[Close]",
          "snapshotUrls": "https://i.gkd.li/import/12905846"
        }
      ]
    },
    {
      "name": "分段广告-朋友圈广告-繁体版",
      "desc": "繁体界面朋友圈广告：点广告卡片右上角[广告]，浮层里点[关闭此广告]",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 62,
      "rules": [
        {
          "matches": "ImageView - TextView[text=\"廣告\"][clickable=true][id!=null]",
          "key": 0,
          "name": "点击广告卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/import/13791200"
        },
        {
          "matches": "RelativeLayout[childCount=6] > TextView[text=\"關閉此廣告\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[关闭此广告]",
          "snapshotUrls": "https://i.gkd.li/import/13791202"
        }
      ]
    },
    {
      "name": "功能类-浏览器扫码微信登录自动授权",
      "desc": "自动允许使用头像昵称等",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 63,
      "rules": [
        {
          "matches": "Button[text=\"拒绝\"] - Button[text=\"允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-第三方APP申请使用授权弹窗",
      "desc": "自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 64,
      "rules": [
        {
          "matches": "Button[text=\"拒绝\"] - Button[text=\"允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-订阅号文章广告反馈",
      "desc": "⚠ 此规则有概率误触。自动点击反馈理由，配合【订阅号文章广告】规则使用",
      "enable": false,
      "key": 65,
      "rules": [
        {
          "matches": "View > [id=\"feedbackTagContainer\"][visibleToUser=true] + [id^=\"menu\"] > [id=\"dislike\"][text=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642234",
            "https://i.gkd.li/import/12722301",
            "https://i.gkd.li/import/12722331"
          ]
        },
        {
          "matches": "View > [id^=\"menu\"] > [id=\"isdismatch\"][text=\"与我无关\"]",
          "key": 1,
          "name": "点击与我无关",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642238"
          ]
        },
        {
          "matches": "TextView[id=\"closeBtn\"][text=\"关闭此广告\"]",
          "key": 2,
          "name": "点击关闭此广告",
          "snapshotUrls": "https://i.gkd.li/import/12700191"
        }
      ]
    },
    {
      "name": "全屏广告-微信小程序-开屏广告",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "key": 66,
      "rules": [
        {
          "matches": [
            "FrameLayout > TextView + FrameLayout > TextView[text=\"广告\"]",
            "FrameLayout > TextView + FrameLayout > TextView[text=\"跳过\"]"
          ],
          "actionDelay": 800,
          "snapshotUrls": [
            "https://i.gkd.li/import/12701979",
            "https://i.gkd.li/import/12777076",
            "https://i.gkd.li/import/12785012",
            "https://i.gkd.li/import/12785183",
            "https://i.gkd.li/import/13306883",
            "https://i.gkd.li/import/12785246",
            "https://i.gkd.li/import/13407275"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-提瓦特助手小程序-弹窗广告",
      "enable": false,
      "key": 67,
      "rules": [
        {
          "matches": [
            "RelativeLayout[childCount=1][clickable=true] > [text=\"提瓦特小助手\"]",
            "FrameLayout[childCount=5] + FrameLayout[childCount=2] >2 FrameLayout[childCount=1]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12926021"
        },
        {
          "matches": [
            "FrameLayout > FrameLayout > FrameLayout > TextView[text=\"广告\"]",
            "FrameLayout[childCount=6] + FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13459614"
        }
      ]
    },
    {
      "name": "全屏广告-小程序-京东购物",
      "desc": "低价包邮广告",
      "enable": false,
      "actionMaximum": 1,
      "actionDelay": 500,
      "key": 68,
      "rules": [
        {
          "matches": "@Image -n * > View[text=\"可横向滚动\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/import/13298294"
          ],
          "key": 0
        }
      ]
    },
    {
      "key": 69,
      "name": "分段广告-朋友圈广告-关闭浮层",
      "enable": true,
      "desc": "朋友圈广告浮层：点[关闭该广告] -> 点[直接关闭]。只点浮层按钮，不点广告卡片本身",
      "rules": [
        {
          "key": 0,
          "name": "点[关闭该广告]",
          "matches": "[text=\"关闭该广告\"||text=\"關閉該廣告\"||text=\"关闭此广告\"||text=\"關閉此廣告\"][visibleToUser=true]",
          "action": "clickCenter",
          "actionDelay": 120,
          "actionMaximum": 2
        },
        {
          "key": 1,
          "name": "点[直接关闭]",
          "anyMatches": [
            "[text=\"直接关闭\"||text=\"直接關閉\"][visibleToUser=true]",
            "[text=\"关闭该广告的原因\"||text=\"關閉該廣告的原因\"] +(2) [text=\"直接关闭\"||text=\"直接關閉\"]",
            "[text=\"关闭该广告的原因\"||text=\"關閉該廣告的原因\"] -(2) [text=\"直接关闭\"||text=\"直接關閉\"]",
            "@[clickable=true] > [text=\"直接关闭\"||text=\"直接關閉\"]"
          ],
          "action": "click",
          "actionDelay": 400,
          "actionMaximum": 2
        },
        {
          "key": 2,
          "name": "点[关闭广告]",
          "matches": "[text=\"关闭广告\"||text=\"關閉廣告\"][visibleToUser=true][clickable=true]",
          "action": "clickCenter",
          "actionDelay": 120,
          "actionMaximum": 2
        },
        {
          "key": 3,
          "name": "点[广告旁的关闭]",
          "matches": "TextView[text=\"广告\"||text=\"廣告\"][clickable=true] <2 * > [text=\"关闭\"||text=\"關閉\"][visibleToUser=true]",
          "action": "clickCenter",
          "actionDelay": 120,
          "actionMaximum": 2
        }
      ],
      "actionCd": 300,
      "fastQuery": true
    }
  ]
});
