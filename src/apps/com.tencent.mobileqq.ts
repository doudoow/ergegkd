// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ",
  "id": "com.tencent.mobileqq",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击跳过应用启动时的开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text^=\"跳过\"][text.length<=10][!(vid=\"title\")]",
          "excludeMatches": "[vid=\"root\"]",
          "excludeActivityIds": [
            ".activity.ChatActivity",
            ".search.activity.UniteSearchActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13093155",
            "https://i.gkd.li/i/13207731"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13217807",
            "https://i.gkd.li/i/13856647",
            "https://i.gkd.li/i/13868177",
            "https://i.gkd.li/i/14341023",
            "https://i.gkd.li/i/15334565"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text^=\"跳过\"][text.length<=10][vid!=\"title\"]",
          "excludeMatches": "[vid=\"chat_item_content_layout\"]",
          "key": 1,
          "excludeActivityIds": [
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.search.activity.UniteSearchActivity"
          ]
        },
        {
          "matches": "TextView[text^=\"跳过\"][text.length<=10][vid!=\"title\"]",
          "excludeMatches": "[vid=\"root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13093155",
            "https://i.gkd.li/i/13207731"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13217807",
            "https://i.gkd.li/i/13856647",
            "https://i.gkd.li/i/13868177",
            "https://i.gkd.li/i/14341023",
            "https://i.gkd.li/i/15334565"
          ],
          "key": 2,
          "excludeActivityIds": [
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.search.activity.UniteSearchActivity"
          ]
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"关闭广告\"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text=\"详情\"]",
          "activityIds": [
            "com.qzone.reborn.base.QZoneTransparentShellActivity",
            "com.qzone.reborn.base.QZoneShellActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "好友动态详情页广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/17009847",
            "https://i.gkd.li/i/17815694",
            "https://i.gkd.li/i/17827969"
          ],
          "exampleUrls": "https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3"
        },
        {
          "matches": "@[desc=\"关闭\"] - [text=\"推荐你试试这些玩法\"]",
          "activityIds": "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
          "fastQuery": true,
          "key": 1,
          "name": "推荐你试试这些玩法",
          "snapshotUrls": "https://i.gkd.li/i/18236745",
          "exampleUrls": "https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][clickable=true][childCount=0] -2 [text$=\"试用超级会员\"][visibleToUser=true]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23837678"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][clickable=true] <n RelativeLayout - RelativeLayout >3 ImageView[desc=\"快捷入口\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24230528"
        },
        {
          "matches": "@ImageView[width<100 && height<100][clickable=true] - TextView[text!=null] <n * + * >3 ImageView[desc=\"快捷入口\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25235782"
        },
        {
          "matches": "@ImageView[clickable=true][width<100 && height<100][desc=\"关闭\" || desc=null][index!=0] <<n FrameLayout <(2,3) * <2 [childCount=4] <2 [vid=\"root\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/24230528",
            "https://i.gkd.li/i/28426083",
            "https://i.gkd.li/i/28425887",
            "https://i.gkd.li/i/28425944",
            "https://i.gkd.li/i/29140037"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29032927"
        },
        {
          "matches": "ImageView[width<62] < [visibleToUser=true][desc=\"关闭广告\"]",
          "activityIds": ".activity.QPublicFragmentActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/33948809"
        },
        {
          "matches": "[longClickable!=true][vid!=\"chat_item_head_icon\"][desc=null&&text=null] <n *[left=0][vid!=\"root\"][visibleToUser=true] >n TextView[clickable=false][text.length>0][!(text~=\"(?is).*([01]?[0-9]|2[0-3])[:：][0-5][0-9].*\")][text!$=\"G\"&&text!$=\"M\"&&text!$=\"k\"][visibleToUser=true] <<n * > [name$=\"ImageView\"||name$=\"Button\"][desc=\"关闭\"||(desc=null&&text=null)][vid!=\"chat_item_head_icon\"][childCount=0][visibleToUser=true][clickable=true][longClickable!=true][left>0]",
          "excludeMatches": [
            "[id^=\"com.tencent.mobileqq.qzone\"]",
            "[text=\"互动标识\"]",
            "[text=\"群标签\"]",
            "[text=\"小程序\"]"
          ],
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 7,
          "name": "消息页面顶部广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13426912",
            "https://i.gkd.li/import/12706907",
            "https://i.gkd.li/import/13107298",
            "https://i.gkd.li/import/12793359",
            "https://i.gkd.li/import/12855048",
            "https://i.gkd.li/import/13228108",
            "https://i.gkd.li/import/12855441",
            "https://i.gkd.li/import/13188722",
            "https://i.gkd.li/import/13255493",
            "https://i.gkd.li/import/13843140",
            "https://i.gkd.li/import/13931212",
            "https://i.gkd.li/import/14178669",
            "https://i.gkd.li/import/14178667",
            "https://i.gkd.li/import/12892726",
            "https://i.gkd.li/import/12774870",
            "https://i.gkd.li/import/13207766",
            "https://i.gkd.li/import/13386518",
            "https://i.gkd.li/import/13476400",
            "https://i.gkd.li/import/14155603",
            "https://i.gkd.li/import/14217033",
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/16323755",
            "https://i.gkd.li/i/17529150",
            "https://i.gkd.li/i/23837678",
            "https://i.gkd.li/i/24230528",
            "https://i.gkd.li/i/25235782",
            "https://i.gkd.li/i/26159150",
            "https://i.gkd.li/i/28426083",
            "https://i.gkd.li/i/28425887",
            "https://i.gkd.li/i/28425944",
            "https://i.gkd.li/i/29140037"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14414585",
            "https://i.gkd.li/i/15075866",
            "https://i.gkd.li/i/15782476",
            "https://i.gkd.li/i/15883390",
            "https://i.gkd.li/i/24989508"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text*=\"发现可能认识的人\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 8,
          "name": "联系人页面顶部可能认识的人推荐",
          "snapshotUrls": "https://i.gkd.li/i/18237415"
        },
        {
          "matches": "FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text=\"跳过\" || text=\"关闭\"][clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity",
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "聊天页面关键词广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14183188",
            "https://i.gkd.li/i/16549500",
            "https://i.gkd.li/i/16555184"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][width<87] <2 [visibleToUser=true] - [childCount=3] >2 [text=\"广告\"]",
          "activityIds": "com.qzone.reborn.base.QZoneShellActivity",
          "fastQuery": true,
          "key": 10,
          "name": "空间相册内广告",
          "snapshotUrls": "https://i.gkd.li/i/30869035"
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "①点击[广告/更多] ②点击[关闭这条] ③点击[直接关闭]",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21947672",
            "https://i.gkd.li/i/24404962"
          ]
        },
        {
          "matches": "@[desc=\"更多\"][clickable=true] - [desc=\"广告\"][visibleToUser=true] - LinearLayout > [text=\"今天\"]",
          "activityIds": ".activity.SplashActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24381585"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"关闭此条广告\"]",
          "preKeys": [
            3,
            1
          ],
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            ".activity.SplashActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/21947698",
            "https://i.gkd.li/i/24381598",
            "https://i.gkd.li/i/24406932"
          ],
          "key": 2
        },
        {
          "anyMatches": [
            "[text=\"广告\"][clickable=true]",
            "@[clickable=true] > [text=\"广告\"][visibleToUser=true]"
          ],
          "key": 3,
          "name": "①点击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30876372",
            "https://i.gkd.li/i/33749525",
            "https://i.gkd.li/i/21947672",
            "https://i.gkd.li/i/24404962",
            "https://i.gkd.li/i/28888622"
          ],
          "exampleUrls": [
            "https://e.gkd.li/ab1f2c2a-a565-42d4-ab24-49747ad558ec",
            "https://e.gkd.li/b272a9a4-ba11-4bee-9608-123683475c68",
            "https://e.gkd.li/76ce897a-7ff5-4edb-b3de-381187bcea1a"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [text^=\"关闭\"][text*=\"条\"][text.length<10]",
          "preKeys": [
            3,
            1
          ],
          "key": 4,
          "name": "②点击[关闭]此条广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/21947698",
            "https://i.gkd.li/i/24381598",
            "https://i.gkd.li/i/24406932",
            "https://i.gkd.li/i/26997293",
            "https://i.gkd.li/i/28888643",
            "https://i.gkd.li/i/28942736",
            "https://i.gkd.li/i/30876374",
            "https://i.gkd.li/i/33749584"
          ],
          "exampleUrls": [
            "https://e.gkd.li/62772b6a-f349-4701-8c1d-5bfa08a4f6c9",
            "https://e.gkd.li/4ff2b91f-7a3a-4514-9c23-0310c499ff9e",
            "https://e.gkd.li/c26339b2-8df9-4aed-a3ba-4ec77e519574"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"][clickable=true]",
          "preKeys": [
            4
          ],
          "key": 5,
          "name": "③点击[直接关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26997174",
            "https://i.gkd.li/i/28942737",
            "https://i.gkd.li/i/30876376",
            "https://i.gkd.li/i/33749791"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a5da537d-d1cc-4420-a9a4-3329cf4a8fad",
            "https://e.gkd.li/1fc58680-ecb3-4f8b-b204-b2d55fe20964"
          ]
        }
      ]
    },
    {
      "name": "功能类-登录授权",
      "desc": "自动点击登录",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"登录确认\" || text$=\"申请使用\"][visibleToUser=true]",
            "Button[text=\"登录\" || text=\"同意\" || text=\"确认\"][clickable=true][visibleToUser=true]"
          ],
          "actionCd": 500,
          "actionMaximum": 3,
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
            "com.tencent.open.agent.QuickLoginAuthorityActivity"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/20737721",
            "https://i.gkd.li/i/20737651",
            "https://i.gkd.li/i/20737675",
            "https://i.gkd.li/i/20737673",
            "https://i.gkd.li/i/22631619"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动勾选原图",
      "desc": "发送图片时自动勾选原图，可手动取消勾选",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@CheckBox[checked=false] + [text=\"原图\"]",
          "activityIds": [
            ".activity.SplashActivity",
            "com.tencent.qqnt.qbasealbum.WinkHomeActivity",
            ".activity.photo.album.NewPhotoListActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705556",
            "https://i.gkd.li/i/12705559",
            "https://i.gkd.li/i/13295142",
            "https://i.gkd.li/i/13476247"
          ],
          "key": 0
        },
        {
          "matches": "@CheckBox[checked=false] + [text=\"原图\"]",
          "key": 1
        },
        {
          "matches": "@CheckBox[checked=false][visibleToUser=true] + [text=\"原图\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动点击查看原图",
      "desc": "查看图片时自动点击原图",
      "key": 5,
      "rules": [
        {
          "anyMatches": [
            "[text^=\"查看原图\"][clickable=true][visibleToUser=true]",
            "@[clickable=true] > [text^=\"查看原图\"][visibleToUser=true]"
          ],
          "activityIds": "com.tencent.richframework.gallery.QQGalleryActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14757735",
            "https://i.gkd.li/i/24489364"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告-QQ小程序开屏广告",
      "desc": "点击右下角跳过",
      "actionMaximum": 1,
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".mini.appbrand.ui.AppBrandUI",
            ".activity.miniaio.MiniChatActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12877215",
            "https://i.gkd.li/i/12919195",
            "https://i.gkd.li/i/15130235"
          ],
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12877215",
            "https://i.gkd.li/i/12919195",
            "https://i.gkd.li/i/15130235"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "关闭应用更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 7,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] <2 * >2 Button[text^=\"立即\" || text=\"马上升级\"][text.length=4]",
          "activityIds": [
            ".activity.SplashActivity",
            ".upgrade.ui.dialog.UpgradeActivity",
            ".upgrade.activity.UpgradeActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13386719",
            "https://i.gkd.li/i/13526551",
            "https://i.gkd.li/i/22455760",
            "https://i.gkd.li/i/23393647"
          ]
        },
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"稍后处理\"]"
          ],
          "activityIds": ".upgrade.activity.UpgradeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14724108"
        },
        {
          "matches": "@[desc=\"关闭\"] - * > [text=\"发现新版本\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13386719"
        },
        {
          "matches": "@[text=\"稍后处理\"] +2 [text=\"立即升级\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14724108"
        },
        {
          "matches": "@[desc=\"关闭\"] - * > [text=\"QQ测试版\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13526551",
            "https://i.gkd.li/i/22455760"
          ]
        },
        {
          "matches": "@[desc=\"关闭\"] - ViewGroup > [text=\"立即体验\"||text=\"立即升级\"]",
          "key": 5
        }
      ]
    },
    {
      "name": "更新提示-消息页面-顶部",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 8,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][text=null][visibleToUser=true] - [text*=\"版本更新\" || text=\"点击下载\" || text=\"立即安装\" || text=\"点击更新\"][text.length<15]",
          "activityIds": ".activity.SplashActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212",
            "https://i.gkd.li/i/16323755",
            "https://i.gkd.li/i/17529150"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17920550"
        },
        {
          "matches": "@ImageView[clickable=true] <n * > [text*=\"版本更新\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212"
          ]
        },
        {
          "matches": "@[clickable=true][text=null][visibleToUser=true] - [text*=\"版本更新\" || text=\"点击下载\" || text=\"立即安装\" || text=\"点击更新\"][text.length<15]",
          "activityIds": ".activity.SplashActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212",
            "https://i.gkd.li/i/16323755",
            "https://i.gkd.li/i/17529150",
            "https://i.gkd.li/i/26159150"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17920550"
        },
        {
          "matches": "[id=\"com.tencent.mobileqq:id/iyx\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13188722",
            "https://i.gkd.li/import/13255493",
            "https://i.gkd.li/import/13843140"
          ]
        },
        {
          "matches": "[text=\"发现QQ版本更新\"] + [text=\"点击下载\"] + ImageView[clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/13931212"
        }
      ]
    },
    {
      "name": "局部广告-聊天页面广告",
      "key": 9,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text=\"跳过\" || text=\"关闭\"][clickable=true]",
          "activityIds": [
            ".profilecard.activity.FriendProfileCardActivity",
            ".activity.ChatActivity",
            ".activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "关键词广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14183188",
            "https://i.gkd.li/i/16549500",
            "https://i.gkd.li/i/16555184"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131"
        }
      ],
      "enable": false
    },
    {
      "name": "功能类-自动领取群聊红包",
      "desc": "自己发的红包、专属红包、口令红包、私聊红包不领",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^=\"已\")] + TextView[text=\"拼手气红包\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14221309",
            "https://i.gkd.li/i/18574530",
            "https://i.gkd.li/i/18725007",
            "https://i.gkd.li/i/24551887"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e"
        },
        {
          "anyMatches": [
            "@[desc=\"关闭\"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^=\"来晚一步\"][visibleToUser=true]",
            "[desc=\"拆红包\"][visibleToUser=true]"
          ],
          "preKeys": [
            3
          ],
          "activityIds": [
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
            "com.tencent.biz.TenpayActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14221242",
            "https://i.gkd.li/i/18724880",
            "https://i.gkd.li/i/24551748"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f"
        },
        {
          "matches": "@[desc=\"返回\"] +n [text=\"红包记录\"]",
          "preKeys": [
            4
          ],
          "activityIds": [
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
            "com.tencent.biz.TenpayActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14221279",
            "https://i.gkd.li/i/24551886"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba"
        },
        {
          "matches": "ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^=\"已\")] + TextView[text=\"拼手气红包\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14221309",
            "https://i.gkd.li/i/18725007",
            "https://i.gkd.li/i/24551887"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18574530"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e"
        },
        {
          "anyMatches": [
            "@[desc=\"关闭\"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^=\"来晚一步\"][visibleToUser=true]",
            "[desc=\"拆红包\"][visibleToUser=true]"
          ],
          "preKeys": [
            3
          ],
          "activityIds": [
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
            "com.tencent.biz.TenpayActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14221242",
            "https://i.gkd.li/i/18724880",
            "https://i.gkd.li/i/24551748"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f"
        }
      ]
    },
    {
      "name": "功能类-申请入群后自动点击右上角关闭",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": [
            "TextView[text=\"入群申请中\"][visibleToUser=true]",
            "TextView[text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": ".activity.QQBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14235163",
          "key": 0
        },
        {
          "matches": [
            "TextView[text=\"入群申请中\"][visibleToUser=true]",
            "TextView[text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14235163",
          "exampleUrls": "https://m.gkd.li/57941037/df526685-8a68-48cd-8328-0292079ff030",
          "key": 1
        },
        {
          "matches": [
            "TextView[text=\"入群申请中\"][visibleToUser=true]",
            "TextView[text=\"关闭\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/14235163",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-授权登录时关闭获取QQ好友关系",
      "desc": "自动点击关闭获取QQ好友关系",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "@CompoundButton[checked=true] - RelativeLayout > [text=\"你的QQ好友关系\"]",
          "activityIds": "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16929347",
          "exampleUrls": "https://e.gkd.li/4d69a243-6a57-47ca-bc25-0a5353d80179",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-联系人页面-顶部可能认识的人推荐",
      "desc": "点击关闭",
      "key": 13,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text=\"开启推荐，发现可能认识的人。\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18237415",
          "exampleUrls": "https://e.gkd.li/7922ab73-cc99-4559-b18c-5ab54dd9633a",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动解锁 Windows QQ",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"解锁\"]",
          "activityIds": "com.tencent.biz.qrcode.activity.UnlockPCQuickVerifyActivity",
          "snapshotUrls": "https://i.gkd.li/i/15360265",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭体验模式提醒",
      "desc": "点击[我知道了]",
      "key": 15,
      "rules": [
        {
          "matches": [
            "[text^=\"当前处于\"][text*=\"体验模式\"][visibleToUser=true]",
            "[text=\"我知道了\"][clickable=true]"
          ],
          "activityIds": ".activity.QPublicFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24561058",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动跳转第三方应用",
      "desc": "点击[允许]",
      "key": 16,
      "rules": [
        {
          "matches": [
            "[text$=\"打开其他应用\"]",
            "[text=\"允许\"][clickable=true][visibleToUser=true]"
          ],
          "activityIds": ".activity.QQBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25142977",
          "key": 0
        },
        {
          "matches": [
            "[text$=\"打开其他应用\"]",
            "[text=\"允许\"][clickable=true][visibleToUser=true]"
          ],
          "activityIds": [
            ".activity.QQBrowserActivity",
            ".filebrowser.FileBrowserActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25142977",
            "https://i.gkd.li/i/30150628"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-消息页面顶部横幅广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + ImageView[desc=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12892726",
            "https://i.gkd.li/i/12774870",
            "https://i.gkd.li/i/13207766",
            "https://i.gkd.li/i/13386518"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] - FrameLayout - [text*=\"惊喜礼包\"]",
          "fastQuery": true,
          "key": 1,
          "name": "消息页面-顶部惊喜礼包",
          "snapshotUrls": "https://i.gkd.li/i/13426912"
        },
        {
          "matches": "ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13476400"
        },
        {
          "matches": "RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView",
          "key": 3,
          "name": "稀有龙鹅卡掉落/瓜分现金",
          "snapshotUrls": [
            "https://i.gkd.li/i/14155603",
            "https://i.gkd.li/i/14217033"
          ]
        }
      ]
    },
    {
      "name": "综合广告-好友动态-广告卡片",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "View[desc=\"广告\"] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12847842",
            "https://i.gkd.li/i/13787345"
          ]
        },
        {
          "matches": "ImageView[clickable=true] < * -2 * >2 [text=\"广告\"]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14138557"
        },
        {
          "matches": "@* > ImageView + [text=\"关闭此条广告\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12840889",
            "https://i.gkd.li/i/13831867",
            "https://i.gkd.li/i/14138556"
          ]
        },
        {
          "matches": "@[clickable=true] > * > ImageView + [text=\"隐藏此条动态\"]",
          "preKeys": 0,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13761147",
            "https://i.gkd.li/i/13849730"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12749584",
            "https://i.gkd.li/i/13627967"
          ]
        },
        {
          "matches": "LinearLayout[childCount=4] > LinearLayout > FrameLayout > FrameLayout > @View[visibleToUser=true] <<n [vid=\"root\"]",
          "position": {
            "left": "width * 0.9534",
            "top": "width * 0.0805"
          },
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14732983",
          "exampleUrls": "https://m.gkd.li/57941037/940f4965-0058-4101-ab62-20d131e9c1d1"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭各种场景下的全屏弹窗广告，包括频道页面、钱包页面、黄钻页面等",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "ImageView[id=\"com.tencent.mobileqq:id/close\"][clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206663",
            "https://i.gkd.li/i/12642081"
          ]
        },
        {
          "matches": "[desc=\"弹窗推荐活动\"] + [desc=\"关闭\"]",
          "activityIds": "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
          "key": 1,
          "name": "钱包页面弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14822290",
          "exampleUrls": "https://m.gkd.li/57941037/11e8f456-4c88-431a-ad58-f626bee61df9"
        },
        {
          "matches": "TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]",
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "key": 2,
          "name": "黄钻页面弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12914978",
            "https://i.gkd.li/i/12914886"
          ]
        },
        {
          "matches": "ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id=\"android:id/content\"]",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15136939"
        },
        {
          "matches": "TextView[text.length=0&&clickable=true&&visibleToUser=true] + View[childCount<=1] > Button[text.length=0&&focusable=true]",
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "key": 4,
          "name": "黄钻页面-广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12914978",
            "https://i.gkd.li/import/12914886"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/14229202",
            "https://i.gkd.li/i/22869121"
          ]
        },
        {
          "anyMatches": [
            "ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]",
            "Button[text.length>0][visibleToUser=true] < * -n * > [text*=\"欢迎回来\"][visibleToUser=true] +n ImageView[visibleToUser=true]"
          ],
          "actionMaximum": 1,
          "activityIds": [
            "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
            "cooperation.vip.ad.UserLeadingActivity"
          ],
          "matchTime": 10000,
          "resetMatch": "activity",
          "key": 5,
          "name": "推广游戏广告弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13797876",
            "https://i.gkd.li/i/15981784",
            "https://i.gkd.li/i/16922256"
          ]
        },
        {
          "matches": "[desc^=\"资料卡可展示\"] + [desc=\"关闭浮层\"]",
          "activityIds": ".activity.VisitorsActivity",
          "key": 6,
          "name": "资料卡个性装扮弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/18348068"
          ]
        },
        {
          "matches": [
            "[text=\"开启通讯录\"]",
            "[text=\"关闭\"]"
          ],
          "activityIds": ".activity.phone.PhoneMatchActivity",
          "fastQuery": true,
          "key": 7,
          "name": "关闭开启通讯录建议弹窗页面",
          "snapshotUrls": "https://i.gkd.li/i/18266370"
        }
      ]
    },
    {
      "name": "局部广告-顶部SVIP广告",
      "desc": "消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "LinearLayout > TextView[text*=\"SVIP\"||text*=\"超级会员\"] + FrameLayout[childCount<=2] + [name$=\"ImageView\"||name$=\"Button\"][id!=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-动态页-好友热播",
      "desc": "好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "@Button[clickable=true] - [text=\"好友热播\"]",
          "key": 0,
          "name": "点击 [好友热播] 卡片右上角菜单按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721427",
            "https://i.gkd.li/i/14822579"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text=\"减少好友热播\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[减少好友热播]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721433",
            "https://i.gkd.li/i/14822576"
          ]
        }
      ]
    },
    {
      "name": "功能类-扫一扫登录确认",
      "desc": "自动点击登录。包括 PC 登录确认、QQ 互联登录确认。",
      "enable": false,
      "fastQuery": true,
      "key": 22,
      "rules": [
        {
          "matches": "Button[text*=\"登录\"][clickable=true][visibleToUser=true][text.length<10]",
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            "com.tencent.mobileqq.activity.DevlockQuickLoginActivity",
            "com.tencent.mobileqq.activity.DevLockQuickVerifyActivity"
          ],
          "key": 0,
          "name": "点击登录",
          "snapshotUrls": [
            "https://i.gkd.li/i/13623520",
            "https://i.gkd.li/i/12789287",
            "https://i.gkd.li/i/13063027",
            "https://i.gkd.li/i/13166314"
          ]
        },
        {
          "matches": "Button[text=\"同意\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
          "key": 1,
          "name": "点击同意",
          "snapshotUrls": "https://i.gkd.li/i/14752498"
        },
        {
          "matches": "Button[text=\"确认\"]",
          "preKeys": [
            1
          ],
          "activityIds": "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
          "key": 2,
          "name": "点击确认",
          "snapshotUrls": "https://i.gkd.li/i/14752519"
        }
      ]
    },
    {
      "name": "功能类-消息页面顶部-无法接收新消息通知",
      "desc": "消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "RelativeLayout > [text^=\"当前无法接收\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "关闭等级规则页和频道页的浮窗广告",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "TextView[text=\"QQ等级规则\"] + View > TextView[id=null&&text.length=0]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12914734"
        },
        {
          "matches": "FrameLayout[desc=\"发表帖子\"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "key": 1,
          "name": "右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/12708844"
        },
        {
          "matches": "FrameLayout[desc=\"发表帖子\"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]",
          "key": 2,
          "name": "频道-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12708844"
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "查看图片时自动点击原图",
      "enable": false,
      "fastQuery": true,
      "key": 25,
      "rules": [
        {
          "matches": "[text^=\"查看原图\"]",
          "activityIds": "com.tencent.richframework.gallery.QQGalleryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14757735",
          "key": 0
        },
        {
          "matches": "[text^=\"查看原图\"][checked=false][visibleToUser=true]",
          "key": 1,
          "name": "点击查看原图",
          "snapshotUrls": [
            "https://i.gkd.li/import/12840632",
            "https://i.gkd.li/import/12840633",
            "https://i.gkd.li/i/14757735",
            "https://i.gkd.li/i/15024319",
            "https://i.gkd.li/i/24489364"
          ]
        },
        {
          "matches": [
            "[text=\"流量提醒\"]",
            "[text=\"继续\"]"
          ],
          "key": 2,
          "name": "关闭流量提示弹窗",
          "snapshotUrls": "https://i.gkd.li/i/18344117"
        },
        {
          "matches": "[desc=\"查看原图\"][checked=false]",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-小世界评论区广告",
      "desc": "点击广告-弹出原因框-关闭此条广告",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12847819"
        },
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/12847821",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-好友动态-为你推荐",
      "enable": false,
      "fastQuery": true,
      "key": 27,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"为你推荐\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12929620",
            "https://i.gkd.li/i/13387606"
          ]
        },
        {
          "matches": "@LinearLayout[id!=null][clickable=true] > LinearLayout > [text=\"减少此类推荐\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12929619",
            "https://i.gkd.li/i/13387605"
          ]
        }
      ]
    },
    {
      "name": "更新提示-内测邀请弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 28,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - * > [text=\"QQ测试版\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13526551"
        }
      ]
    },
    {
      "name": "分段广告-钱包页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 29,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13695087"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13699701"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]",
          "key": 0,
          "name": "元梦之星广告弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13797876"
        },
        {
          "matches": "RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]",
          "key": 1,
          "name": "现金瓜分弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14207286",
          "exampleUrls": "https://m.gkd.li/57941037/a9fe74db-07b4-47e6-beed-80983f61d2e3"
        }
      ]
    },
    {
      "name": "分段广告-天气页卡片广告",
      "desc": "点击关闭-点击关闭此条广告",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "[id=\"com.tencent.mobileqq:id/nca\"]",
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14019384"
        },
        {
          "matches": "@LinearLayout[childCount=3] > [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14019401"
        },
        {
          "matches": [
            "ViewGroup[desc=\"返回\"]",
            "ViewGroup[desc=\"首页\"]",
            "ViewGroup[desc=\"分享\"]",
            "ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]"
          ],
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14549503"
        },
        {
          "matches": "View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]",
          "preKeys": 6,
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14549504"
        },
        {
          "matches": [
            "[desc=\"返回\"]",
            "[desc=\"首页\"]",
            "[desc=\"分享\"]",
            "RecyclerView > *[childCount=1] >3 * >n @*[childCount=2][clickable=true][visibleToUser=true]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14549503",
            "https://i.gkd.li/i/14019384"
          ]
        },
        {
          "matches": "@LinearLayout[childCount=3] > [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14019401"
        },
        {
          "matches": "View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]",
          "preKeys": 0,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/14549504"
        }
      ]
    },
    {
      "name": "全屏广告-个人主页广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 32,
      "rules": [
        {
          "matches": "[text=\"开启迷你窝\"]",
          "action": "back",
          "activityIds": "com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity",
          "fastQuery": true,
          "key": 0,
          "name": "迷你窝弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14188980",
          "exampleUrls": "https://m.gkd.li/57941037/882ab889-a145-4951-9a44-1dc192490c79"
        },
        {
          "matches": "[desc=\"关闭\"][visibleToUser=true]",
          "activityIds": "cooperation.vip.ad.UserLeadingActivity",
          "key": 1,
          "name": "个性装扮弹窗",
          "snapshotUrls": "https://i.gkd.li/i/15137056"
        },
        {
          "matches": [
            "[desc=\"关闭浮层\"]",
            "[desc=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": "cooperation.vip.ad.UserLeadingActivity",
          "key": 2,
          "name": "个性装扮弹窗",
          "snapshotUrls": "https://i.gkd.li/i/15137056",
          "excludeSnapshotUrls": "https://i.gkd.li/i/21792204"
        }
      ]
    },
    {
      "name": "局部广告-聊天页-顶部活动浮窗",
      "enable": false,
      "key": 33,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] >4 FrameLayout[childCount=2] > FrameLayout[index=1] > RelativeLayout[childCount=4] > TextView[index=1] +2 ImageView",
          "excludeMatches": [
            "[text*=\"正在语音通话\"]",
            "[text*=\"正在一起听歌\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14178667",
            "https://i.gkd.li/i/14193973",
            "https://i.gkd.li/i/14734790"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7"
        }
      ]
    },
    {
      "name": "全屏广告-腾讯文档页面-\"使用App\"弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 34,
      "rules": [
        {
          "matches": "@TextView[clickable=true] + * > [text^=\"使用 APP\"] <<n [vid=\"webview\"]",
          "activityIds": "com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14188983",
          "exampleUrls": "https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-设备登录授权",
      "desc": "自动点击登录(登录 <设备> QQ)",
      "actionCd": 500,
      "actionMaximum": 3,
      "matchRoot": true,
      "key": 35,
      "rules": [
        {
          "matches": "TextView[text^=\"登录 \"][text$=\"QQ\"][visibleToUser=true] +(6-n) LinearLayout > Button[text=\"登录\" || text=\"确认\"][clickable=true]",
          "fastQuery": true,
          "key": 0,
          "name": "快查",
          "snapshotUrls": "https://i.gkd.li/i/20737721",
          "exampleUrls": "https://e.gkd.li/425a34a7-d32e-4df1-9216-7276d883768a"
        },
        {
          "matches": "TextView[text^=\"登录 \"][text$=\"QQ\"][visibleToUser=true] +(6-n) LinearLayout > Button[text=\"登录\" || text=\"确认\"][clickable=true]",
          "actionMaximumKey": 1,
          "key": 1,
          "name": "无快查",
          "snapshotUrls": "https://i.gkd.li/i/12789287"
        },
        {
          "matches": "Button[text=\"允许登录QQ\"][clickable=true][visibleToUser=true]",
          "preKeys": [
            0,
            1
          ],
          "name": "异常二次确认",
          "snapshotUrls": "https://i.gkd.li/i/13063027",
          "exampleUrls": "https://e.gkd.li/821aeac0-8e87-425d-a660-139c13dc4e50",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动[勾选]同意协议",
      "desc": "✅已阅读并同意服务协议和隐私政策",
      "key": 36,
      "rules": [
        {
          "matches": "@CheckBox[checked=false] + [text=\"已阅读并同意服务协议和隐私政策\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.LoginPublicFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33854572",
          "exampleUrls": "https://e.gkd.li/e38854d8-4cd5-41c0-9396-b2c95ef9a788",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[勾选]原图",
      "desc": "发送图片时自动勾选原图，可手动取消勾选",
      "actionMaximum": 1,
      "key": 37,
      "rules": [
        {
          "matches": "@CheckBox[checked=false] + [text=\"原图\"]",
          "activityIds": [
            ".activity.SplashActivity",
            "com.tencent.qqnt.qbasealbum.WinkHomeActivity",
            ".activity.photo.album.NewPhotoListActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705556",
            "https://i.gkd.li/i/12705559",
            "https://i.gkd.li/i/13295142",
            "https://i.gkd.li/i/13476247"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-不看或隐藏[官方Qzone]的动态",
      "desc": "点击动态右上角三个点-不看此条动态-确定",
      "key": 38,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<160 && height<160] - * >2 [desc=\"官方Qzone\"] <<(-n+8) ViewGroup +n * >(2,3) [text^=\"说点什么吧\"]",
          "activityIds": [
            ".activity.SplashActivity",
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "①点击右边三个点",
          "snapshotUrls": [
            "https://i.gkd.li/i/26308400",
            "https://i.gkd.li/i/26489612"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [text^=\"不看\" || text^=\"隐藏\"][text$=\"动态\"]",
          "preKeys": 0,
          "activityIds": [
            ".activity.SplashActivity",
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "②不看or隐藏此条动态",
          "snapshotUrls": [
            "https://i.gkd.li/i/26308405",
            "https://i.gkd.li/i/26489660"
          ]
        },
        {
          "matches": "[desc=\"确认不看此条动态吗？\"] +n [desc=\"确定\"]",
          "activityIds": ".activity.QPublicTransFragmentActivity",
          "key": 2,
          "name": "③确定",
          "snapshotUrls": "https://i.gkd.li/i/26308417"
        },
        {
          "matches": "[childCount=2] > [text=\"确定\"]",
          "preKeys": [
            1
          ],
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 3,
          "name": "④确定",
          "snapshotUrls": "https://i.gkd.li/i/26489750"
        }
      ]
    },
    {
      "name": "分段广告-QQ空间空友爱看",
      "desc": "①点击右侧折叠 ②[不感兴趣/关闭推荐] ③选择原因 ④点击[提交]",
      "enable": false,
      "fastQuery": true,
      "key": 39,
      "rules": [
        {
          "matches": "@[clickable=true][index=parent.childCount.minus(1)] -2 [text=\"空友爱看\"]",
          "key": 0,
          "name": "①点击右侧折叠",
          "snapshotUrls": [
            "https://i.gkd.li/i/32656065",
            "https://i.gkd.li/i/33508601",
            "https://i.gkd.li/i/33665642"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\" || text=\"关闭推荐\"]",
          "preKeys": [
            4
          ],
          "key": 1,
          "name": "②不感兴趣/关闭推荐",
          "snapshotUrls": [
            "https://i.gkd.li/i/32656067",
            "https://i.gkd.li/i/33508604",
            "https://i.gkd.li/i/33665763"
          ]
        },
        {
          "matches": "[desc=\"没有我想看的类型 未选中\"]",
          "preKeys": [
            5
          ],
          "activityIds": ".activity.QPublicTransFragmentActivity",
          "key": 2,
          "name": "③选择原因",
          "snapshotUrls": "https://i.gkd.li/i/32656073"
        },
        {
          "matches": "[desc$=\"已选中\"] +n * > [desc=\"提交\"]",
          "preKeys": [
            2
          ],
          "activityIds": ".activity.QPublicTransFragmentActivity",
          "key": 3,
          "name": "④提交",
          "snapshotUrls": "https://i.gkd.li/i/32656070"
        },
        {
          "matches": "@[desc=\"更多操作\"][clickable=true][visibleToUser=true] <3 * +4 * >5 [text=\"空友爱看\"]",
          "key": 4,
          "name": "①更多操作",
          "snapshotUrls": "https://i.gkd.li/i/32656065"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            4
          ],
          "key": 5,
          "name": "②不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/32656067"
        }
      ]
    },
    {
      "name": "局部广告-空间相册内广告",
      "key": 40,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<87] <2 [visibleToUser=true] - [childCount=3] >2 [text=\"广告\"]",
          "activityIds": "com.qzone.reborn.base.QZoneShellActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30869035",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-App申请信息/登录授权",
      "desc": "App申请使用qq登录/用户信息",
      "actionCd": 500,
      "actionMaximum": 3,
      "matchRoot": true,
      "key": 41,
      "rules": [
        {
          "matches": "@Button[text=\"同意\" || text=\"确认\"][clickable=true] < LinearLayout -(4-n) * >(4-n) [text$=\"申请使用\"][visibleToUser=true]",
          "activityIds": [
            "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
            "com.tencent.open.agent.QuickLoginAuthorityActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "信息授权",
          "snapshotUrls": [
            "https://i.gkd.li/i/20737673",
            "https://i.gkd.li/i/22631619"
          ],
          "exampleUrls": [
            "https://e.gkd.li/5d5e24b7-178b-4afb-b2df-2fa55c49575f",
            "https://e.gkd.li/8a79aed5-3651-40ae-a68c-f17813b03183"
          ]
        },
        {
          "matches": "TextView[text^=\"登录 \"][visibleToUser=true] +(6-n) LinearLayout > Button[text=\"登录\" || text=\"确认\"][clickable=true]",
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            ".activity.DevLockQuickVerifyActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "登录",
          "snapshotUrls": "https://i.gkd.li/i/20737651",
          "exampleUrls": "https://e.gkd.li/c1258db1-97f2-4ee5-90ed-50b73669d68d"
        },
        {
          "matches": "TextView[text^=\"登录 \"][visibleToUser=true] +(6-n) Button[text=\"登录\" || text=\"确认\"][clickable=true]",
          "actionMaximumKey": 2,
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            ".activity.DevLockQuickVerifyActivity"
          ],
          "key": 2,
          "name": "登录(无快查)",
          "snapshotUrls": "https://i.gkd.li/i/20737675"
        }
      ]
    },
    {
      "name": "分段广告-广告卡片菜单",
      "desc": "通过广告卡片菜单关闭好友动态、小世界评论区和钱包场景中的广告",
      "enable": false,
      "key": 42,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.base.QZoneShellActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "①点击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/21947672",
            "https://i.gkd.li/i/24404962",
            "https://i.gkd.li/i/28888622"
          ]
        },
        {
          "matches": "@[desc=\"更多\"][clickable=true] - [desc=\"广告\"][visibleToUser=true] - LinearLayout > [text=\"今天\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24381585"
        },
        {
          "matches": "[text=\"广告\"][clickable=true]",
          "activityIds": "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/30876372"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text^=\"关闭\"][text*=\"条\"][text.length<10]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
            "com.qzone.reborn.base.QZoneShellActivity",
            ".activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "点击[关闭]此条广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/21947698",
            "https://i.gkd.li/i/24381598",
            "https://i.gkd.li/i/24406932",
            "https://i.gkd.li/i/26997293",
            "https://i.gkd.li/i/28888643",
            "https://i.gkd.li/i/28942736",
            "https://i.gkd.li/i/30876374"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"][clickable=true]",
          "preKeys": [
            3
          ],
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
            "com.qzone.reborn.base.QZoneShellActivity",
            ".activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "name": "点击[直接关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26997174",
            "https://i.gkd.li/i/28942737",
            "https://i.gkd.li/i/30876376"
          ]
        },
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ],
          "key": 5,
          "name": "小世界评论区-点击[广告]",
          "snapshotUrls": "https://i.gkd.li/import/12847819"
        },
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "preKeys": 5,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ],
          "key": 6,
          "name": "小世界评论区-点击[关闭此条广告]",
          "snapshotUrls": "https://i.gkd.li/import/12847821"
        },
        {
          "matches": "ViewGroup[childCount=6] > [text=\"广告\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "name": "钱包页-点击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13695087"
          ]
        },
        {
          "matches": "@View[visibleToUser=true] > [text=\"广告\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
          ],
          "fastQuery": true,
          "key": 8,
          "name": "钱包页-点击[广告]父节点",
          "snapshotUrls": "https://i.gkd.li/import/14231489"
        },
        {
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "preKeys": [
            7,
            8
          ],
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "钱包页-点击[关闭此条广告]",
          "snapshotUrls": "https://i.gkd.li/import/13699701"
        }
      ]
    },
    {
      "name": "分段广告-动态页[好友热播/为你推荐]",
      "desc": "点击并关闭好友热播和推荐内容",
      "enable": false,
      "fastQuery": true,
      "key": 43,
      "rules": [
        {
          "matches": "@[clickable=true][visibleToUser=true][childCount=0] - [text=\"好友热播\" || text=\"为你推荐\"]",
          "key": 0,
          "name": "点击[好友热播]卡片右上角菜单按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721427",
            "https://i.gkd.li/import/12894359",
            "https://i.gkd.li/i/14822579",
            "https://i.gkd.li/i/12929620",
            "https://i.gkd.li/i/13387606"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text=\"减少好友热播\" || text=\"减少此类推荐\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[减少好友热播/为你推荐]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721433",
            "https://i.gkd.li/import/12894375",
            "https://i.gkd.li/i/14822576",
            "https://i.gkd.li/i/12929619",
            "https://i.gkd.li/i/13387605"
          ]
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "关闭消息推送开启提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 44,
      "rules": [
        {
          "matches": "@[desc*=\"关闭\"] - * > [text=\"开启消息推送\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15051308"
        }
      ]
    },
    {
      "name": "功能类-自动授权",
      "desc": "自动点击登录。包括 PC 登录确认、QQ 互联登录确认。",
      "enable": false,
      "fastQuery": true,
      "key": 45,
      "rules": [
        {
          "matches": [
            "[text=\"登录确认\" || text=\"一键验证\"][visibleToUser=true]",
            "Button[text*=\"登录\" || text=\"确认\" || text^=\"允许登录\"][clickable=true][visibleToUser=true]"
          ],
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            "com.tencent.mobileqq.activity.DevlockQuickLoginActivity",
            "com.tencent.mobileqq.activity.DevLockQuickVerifyActivity",
            "com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl"
          ],
          "key": 0,
          "name": "PC 登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/import/13623520",
            "https://i.gkd.li/import/12789287",
            "https://i.gkd.li/import/13063027",
            "https://i.gkd.li/import/13166314",
            "https://i.gkd.li/i/15884502",
            "https://i.gkd.li/i/15884520",
            "https://i.gkd.li/i/20737651",
            "https://i.gkd.li/i/22319172",
            "https://i.gkd.li/i/20737721"
          ]
        },
        {
          "matches": "Button[text=\"同意\"][clickable=true][visibleToUser=true]",
          "excludeMatches": [
            "[text=\"群通知\"]"
          ],
          "activityIds": [
            "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
            "com.tencent.open.agent.QuickLoginAuthorityActivity"
          ],
          "key": 1,
          "name": "QQ 互联登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/i/14752498",
            "https://i.gkd.li/i/20737675",
            "https://i.gkd.li/i/22631619"
          ]
        },
        {
          "matches": "Button[text=\"确认\"||text=\"我知道了\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
            "com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl"
          ],
          "key": 2,
          "name": "点击确认",
          "snapshotUrls": [
            "https://i.gkd.li/i/14752519",
            "https://i.gkd.li/i/22319176",
            "https://i.gkd.li/i/20737673",
            "https://i.gkd.li/i/22870545"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-QQ小程序开屏广告",
      "desc": "点击跳过QQ小程序的开屏广告",
      "enable": false,
      "actionMaximum": 1,
      "priorityTime": 10000,
      "fastQuery": true,
      "key": 46,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".mini.appbrand.ui.AppBrandUI",
            ".activity.miniaio.MiniChatActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12877215",
            "https://i.gkd.li/i/12919195",
            "https://i.gkd.li/i/15130235"
          ]
        },
        {
          "matches": "TextView[text = \"广告\"] < RelativeLayout + RelativeLayout TextView[text = \"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12877215",
            "https://i.gkd.li/import/12919195"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-消息页面-顶部广告",
      "desc": "规则误触,待修复,需要快照准确定位",
      "enable": false,
      "key": 47,
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + ImageView[desc=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12892726",
            "https://i.gkd.li/import/12774870",
            "https://i.gkd.li/import/13207766",
            "https://i.gkd.li/import/13386518"
          ]
        },
        {
          "matches": "[text*=\"惊喜礼包\"] + FrameLayout + ImageView[clickable=true]",
          "key": 1,
          "name": "局部广告-消息页面-顶部惊喜礼包",
          "snapshotUrls": "https://i.gkd.li/import/13426912"
        },
        {
          "matches": "ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13476400"
        }
      ]
    },
    {
      "name": "分段广告-好友动态-广告卡片",
      "enable": false,
      "key": 48,
      "rules": [
        {
          "matches": "View[desc=\"广告\"] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12847842",
            "https://i.gkd.li/import/13787345"
          ]
        },
        {
          "matches": "@[clickable=true] > ImageView + [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12840889",
            "https://i.gkd.li/import/13831867"
          ]
        },
        {
          "matches": "@[clickable=true] > * > ImageView + [text=\"隐藏此条动态\"]",
          "preKeys": 0,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13761147",
            "https://i.gkd.li/import/13849730"
          ]
        },
        {
          "matches": "[id=\"com.tencent.mobileqq:id/tv_name\"] + TextView[text=\"广告\"] + @ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12749584",
            "https://i.gkd.li/import/13627967"
          ]
        }
      ]
    },
    {
      "name": "局部广告-频道页面广告",
      "enable": false,
      "key": 49,
      "rules": [
        {
          "matches": "ImageView[id=\"com.tencent.mobileqq:id/close\"][clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog"
          ],
          "fastQuery": true,
          "name": "弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13206663",
            "https://i.gkd.li/import/12642081"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout[desc=\"发表帖子\"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "name": "右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12708844",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-好友热播",
      "desc": "好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭",
      "enable": false,
      "key": 50,
      "rules": [
        {
          "matches": "TextView[text=\"好友热播\"] + Button[id^=\"com.tencent.mobileqq.qzone_df_impl:id/\"][clickable=true]",
          "name": "点击[好友热播]卡片右上角菜单按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721427",
            "https://i.gkd.li/import/12894359"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"减少好友热播\"] <2 LinearLayout < LinearLayout[id^=\"com.tencent.mobileqq.qzone_df_impl:id/\"][clickable=true]",
          "name": "点击[减少好友热播]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721433",
            "https://i.gkd.li/import/12894375"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-扫一扫-登录确认",
      "desc": "自动点击登录。包括 PC 登录确认、QQ 互联登录确认。",
      "enable": false,
      "fastQuery": true,
      "key": 51,
      "rules": [
        {
          "matches": "TextView[text=\"登录确认\"||text=\"一键验证\"] <n * +n * >n Button[text*=\"登录\"]",
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            "com.tencent.mobileqq.activity.DevlockQuickLoginActivity"
          ],
          "key": 0,
          "name": "PC 登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/import/13623520",
            "https://i.gkd.li/import/12789287",
            "https://i.gkd.li/import/13063027"
          ]
        },
        {
          "matches": "Button[text=\"拒绝\"] - Button[text=\"登录\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.DevLockQuickVerifyActivity"
          ],
          "key": 1,
          "name": "QQ 互联登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/import/13166314"
          ]
        }
      ]
    },
    {
      "name": "局部广告-消息页面顶部-无法接收新消息通知",
      "desc": "消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x",
      "enable": false,
      "key": 52,
      "rules": [
        {
          "matches": "RelativeLayout > [text^=\"当前无法接收\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-我的等级-浮窗广告",
      "enable": false,
      "key": 53,
      "rules": [
        {
          "matches": "TextView[text=\"QQ等级规则\"] + View > TextView[id=null&&text.length=0]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-QQ小世界评论区广告",
      "desc": "点击广告-弹出原因框-关闭此条广告",
      "enable": false,
      "key": 54,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12847819"
        },
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/12847821",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-黄钻-弹窗广告",
      "enable": false,
      "key": 55,
      "rules": [
        {
          "matches": "TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-好友动态-为你推荐",
      "enable": false,
      "fastQuery": true,
      "key": 56,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"为你推荐\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12929620",
            "https://i.gkd.li/import/13387606"
          ]
        },
        {
          "matches": "@LinearLayout[id!=null][clickable=true] > LinearLayout > [text=\"减少此类推荐\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12929619",
            "https://i.gkd.li/import/13387605"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-内测邀请弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 57,
      "rules": [
        {
          "matches": "@ImageView[desc=\"关闭\"] <2 * >2 [text=\"QQ测试版\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13526551"
        }
      ]
    },
    {
      "name": "全屏广告-钱包-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 58,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13695087"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13699701"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 59,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
          "key": 0,
          "name": "元梦之星广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13797876"
        }
      ]
    },
    {
      "name": "消息页面-顶部广告",
      "desc": "规则误触,待修复,需要快照准确定位",
      "enable": false,
      "key": 60,
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + ImageView[desc=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12892726",
            "https://i.gkd.li/import/12774870",
            "https://i.gkd.li/import/13207766",
            "https://i.gkd.li/import/13386518"
          ]
        },
        {
          "matches": "[text*=\"惊喜礼包\"] + FrameLayout + ImageView[clickable=true]",
          "key": 1,
          "name": "消息页面-顶部惊喜礼包",
          "snapshotUrls": "https://i.gkd.li/import/13426912"
        },
        {
          "matches": "ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13476400"
        }
      ]
    },
    {
      "name": "频道页面广告",
      "enable": false,
      "key": 61,
      "rules": [
        {
          "matches": "ImageView[id=\"com.tencent.mobileqq:id/close\"][clickable=true]",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog"
          ],
          "quickFind": true,
          "name": "弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13206663",
            "https://i.gkd.li/import/12642081"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout[desc=\"发表帖子\"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "name": "右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12708844",
          "key": 1
        }
      ]
    },
    {
      "name": "顶部SVIP广告",
      "desc": "消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x",
      "enable": false,
      "key": 62,
      "rules": [
        {
          "matches": "LinearLayout > TextView[text*=\"SVIP\"||text*=\"超级会员\"] + FrameLayout[childCount<=2] + [name$=\"ImageView\"||name$=\"Button\"][id!=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "好友热播",
      "desc": "好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭",
      "enable": false,
      "key": 63,
      "rules": [
        {
          "matches": "TextView[text=\"好友热播\"] + Button[id^=\"com.tencent.mobileqq.qzone_df_impl:id/\"][clickable=true]",
          "name": "点击[好友热播]卡片右上角菜单按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721427",
            "https://i.gkd.li/import/12894359"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"减少好友热播\"] <2 LinearLayout < LinearLayout[id^=\"com.tencent.mobileqq.qzone_df_impl:id/\"][clickable=true]",
          "name": "点击[减少好友热播]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12721433",
            "https://i.gkd.li/import/12894375"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "扫一扫-登录确认",
      "desc": "自动点击登录。包括 PC 登录确认、QQ 互联登录确认。",
      "enable": false,
      "quickFind": true,
      "key": 64,
      "rules": [
        {
          "matches": "TextView[text=\"登录确认\"||text=\"一键验证\"] <n * +n * >n Button[text*=\"登录\"]",
          "activityIds": [
            "com.tencent.biz.qrcode.activity.QRLoginAuthActivity",
            "com.tencent.mobileqq.activity.DevlockQuickLoginActivity"
          ],
          "key": 0,
          "name": "PC 登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/import/13623520",
            "https://i.gkd.li/import/12789287",
            "https://i.gkd.li/import/13063027"
          ]
        },
        {
          "matches": "Button[text=\"拒绝\"] - Button[text=\"登录\"]",
          "activityIds": [
            "com.tencent.mobileqq.activity.DevLockQuickVerifyActivity"
          ],
          "key": 1,
          "name": "QQ 互联登录确认",
          "snapshotUrls": [
            "https://i.gkd.li/import/13166314"
          ]
        }
      ]
    },
    {
      "name": "消息页面顶部-无法接收新消息通知",
      "desc": "消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x",
      "enable": false,
      "key": 65,
      "rules": [
        {
          "matches": "RelativeLayout > [text^=\"当前无法接收\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "我的等级-浮窗广告",
      "enable": false,
      "key": 66,
      "rules": [
        {
          "matches": "TextView[text=\"QQ等级规则\"] + View > TextView[id=null&&text.length=0]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动勾选原图",
      "desc": "发送图片时自动勾选原图",
      "enable": false,
      "key": 67,
      "rules": [
        {
          "matches": "@CheckBox[checked=false] + [text=\"原图\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动查看原图",
      "desc": "查看图片时自动点击原图",
      "enable": false,
      "key": 68,
      "rules": [
        {
          "matches": "[desc=\"查看原图\"][checked=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "QQ小世界评论区广告",
      "desc": "点击广告-弹出原因框-关闭此条广告",
      "enable": false,
      "key": 69,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12847819"
        },
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/12847821",
          "key": 1
        }
      ]
    },
    {
      "name": "QQ小程序开屏广告",
      "desc": "点击右下角跳过",
      "enable": false,
      "key": 70,
      "rules": [
        {
          "matches": "TextView[text = \"广告\"] < RelativeLayout + RelativeLayout TextView[text = \"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12877215",
            "https://i.gkd.li/import/12919195"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "黄钻-弹窗广告",
      "enable": false,
      "key": 71,
      "rules": [
        {
          "matches": "TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "好友动态-为你推荐",
      "enable": false,
      "quickFind": true,
      "key": 72,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"为你推荐\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12929620",
            "https://i.gkd.li/import/13387606"
          ]
        },
        {
          "matches": "@LinearLayout[id!=null][clickable=true] > LinearLayout > [text=\"减少此类推荐\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12929619",
            "https://i.gkd.li/import/13387605"
          ]
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 73,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - ViewGroup > [text=\"立即体验\"||text=\"立即升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "内测邀请弹窗",
      "enable": false,
      "quickFind": true,
      "key": 74,
      "rules": [
        {
          "matches": "@ImageView[desc=\"关闭\"] <2 * >2 [text=\"QQ测试版\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13526551"
        }
      ]
    },
    {
      "name": "钱包-卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 75,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13695087"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13699701"
          ]
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 76,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
          "key": 0,
          "name": "元梦之星广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13797876"
        }
      ]
    }
  ]
});
