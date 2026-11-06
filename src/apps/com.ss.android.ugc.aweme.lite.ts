// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "抖音极速版",
  "id": "com.ss.android.ugc.aweme.lite",
  "groups": [
    {
      "name": "功能类-功能体验邀请弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "UIText[text^=\"立即体验\"]",
            "FlattenUIText[text=\"不再提示\"][visibleToUser=true]"
          ],
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "fastQuery": true,
          "key": 0,
          "name": "[首页商城]体验邀请弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13684791"
        }
      ]
    },
    {
      "name": "全屏广告-朋友推荐弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme.lite:id/close\"][clickable=true]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13650523",
          "key": 0
        },
        {
          "matches": "[text=\"朋友推荐\"] +2 [vid=\"close\"][clickable=true]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13650523",
          "key": 1
        },
        {
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme.lite:id/close\"][clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"及时获得消息提醒\"] +2 [text=\"暂不开启\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13888485",
          "key": 0
        },
        {
          "matches": [
            "TextView[text$=\"提醒\" || text$=\"通知\"][text.length>5][visibleToUser=true]",
            "[text=\"以后再说\" || text=\"暂不开启\" || text=\"禁止\" || text=\"取消\" || text=\"保持现状\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13888485",
            "https://i.gkd.li/i/32760384",
            "https://i.gkd.li/i/32754778"
          ],
          "exampleUrls": "https://e.gkd.li/3916c33e-f0dc-45c3-8d81-db4bddf761ed",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-选择图片时自动勾选原图",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"原图\"][desc^=\"未选中\"]",
          "activityIds": "com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13946092",
            "https://i.gkd.li/i/13946033"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 4,
      "rules": [
        {
          "matches": "@Image[clickable=true][text!=null][width<100 && height<100] +4 View >2 [text=\"同意协议并查看额度\"][visibleToUser=true]",
          "activityIds": "com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23558501"
        },
        {
          "matches": "@UIView[text=\"不感兴趣\"][clickable=true] +2 FlattenUIText[text=\"不感兴趣\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24123937"
        },
        {
          "matches": "@ImageView[id=null][text=null][width<100][height<100] < ViewGroup[childCount>1] <2 LinearLayout < HorizontalScrollView < ScrollView < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [vid=\"action_bar_root\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matchRoot": true,
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/25547227",
            "https://i.gkd.li/i/28449818"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-添加桌面小组件",
      "desc": "x掉",
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text$=\"桌面小组件\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25208769",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-功能体验邀请弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"不再提示\"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^=\"立即体验\"]",
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "key": 0,
          "name": "【首页商城】体验邀请弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13684791"
        }
      ]
    },
    {
      "name": "未分类-朋友推荐弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme.lite:id/close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-消息提醒弹窗",
      "desc": "点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.lite:id/gl7\"] > [id=\"com.ss.android.ugc.aweme.lite:id/h5q\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13888485",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": [
            "[text*=\"更新\" || text*=\"下载\" || text*=\"安装\" || text*=\"升级\"][visibleToUser=true]",
            "[text$=\"再说\" || text^=\"忽略\" || text^=\"取消\"][clickable=true]"
          ],
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30620547",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-打招呼表情",
      "desc": "聊天界面,朋友在线,打个招呼... 点击x掉",
      "key": 10,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] - [text*=\"打个招呼\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31596787",
          "exampleUrls": "https://e.gkd.li/0e381602-a24a-45fa-839d-e20999ad30f9",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-刷到推广视频时[上滑]",
      "desc": "广告/应用/购物/游戏/咨询/预约/子薇剧场 等推广视频",
      "key": 11,
      "rules": [
        {
          "matches": "([text$=\"广告 展开\" || text$=\"广告 收起\" || text$=\"广告 \"][vid=\"desc\"][visibleToUser=true]) || ([text=\"应用\" || text=\"购物\" || text$=\"游戏\" || text=\"咨询\" || text=\"子薇剧场\" || text=\"预约\"][text.length<6][index=1][visibleToUser=true])",
          "actionDelay": 200,
          "actionCd": 300,
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity",
            "com.ss.android.ugc.aweme.detail.ui.DetailActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29214101",
            "https://i.gkd.li/i/29579093",
            "https://i.gkd.li/i/29686900",
            "https://i.gkd.li/i/32619091",
            "https://i.gkd.li/i/29214002"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29686899",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-商品卡片",
      "desc": "点击x掉",
      "key": 12,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] + [focusable=true] >4 [text=\"购买\"][index=1][visibleToUser=true]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30344666",
          "exampleUrls": "https://e.gkd.li/b7f062ff-1bff-4990-bb67-72bd0818e5d8",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-搜索结果页广告",
      "desc": "①点击[反馈] ②选一个[理由]",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "@[desc=\"广告反馈\"] <3 [childCount=3] + [visibleToUser=true] >5 [text=\"广告\"]",
          "key": 0,
          "name": "①点击[反馈]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30505021",
            "https://i.gkd.li/i/30505027"
          ],
          "exampleUrls": "https://e.gkd.li/35d4bb61-f1d7-46cb-a7df-2a9fdf2136cd"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup <<(7,8) [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.2646",
            "top": "width * 0.1972"
          },
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②选一个[理由]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30505023",
            "https://i.gkd.li/i/32619430"
          ],
          "exampleUrls": "https://e.gkd.li/c1314e68-d89a-42e3-af74-c50303f5546a"
        }
      ]
    },
    {
      "name": "功能类-自动切换到[作品]列表",
      "desc": "在用户主页时,若存在[橱窗/商品/服务],则点击[作品]",
      "key": 14,
      "rules": [
        {
          "matches": "[visibleToUser=false] < ViewPager[childCount>1] - ViewGroup >3 @[desc^=\"作品\"][clickable=true] +n [name$=\"ActionBar$Tab\"] >3 [text=\"橱窗\" || text=\"商品\" || text=\"服务\"][visibleToUser=true]",
          "actionCd": 10000,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/30619207",
            "https://i.gkd.li/i/30619569",
            "https://i.gkd.li/i/30621467",
            "https://i.gkd.li/i/30621712"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/30619208",
            "https://i.gkd.li/i/30619506"
          ],
          "exampleUrls": "https://e.gkd.li/966b01bd-3c89-4f19-83af-7e9429ab25ed",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-评论区-自动展开评论",
      "desc": "只展开一级评论，不点击展示更多",
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开\"][text$=\"回复\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/32755488",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32755811",
          "exampleUrls": [
            "https://e.gkd.li/a2be5c9e-afe9-4992-8c83-bbe191d68d76",
            "https://e.gkd.li/1609405d-5a20-445d-bb2f-5de5a9b1237d"
          ]
        }
      ]
    },
    {
      "name": "功能类-评论区-自动展开评论_全部",
      "desc": "基于上面追加点击展开更多",
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开更多\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/32755811",
          "exampleUrls": "https://e.gkd.li/1609405d-5a20-445d-bb2f-5de5a9b1237d"
        }
      ]
    },
    {
      "name": "功能类-自动开启[自动连播]",
      "desc": "仅在刚进抖极时第1个视频生效, ①[长按]视频 ②开启[自动联播]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[vid=\"viewpager\"][desc=\"视频\"][childCount=2][visibleToUser=true]",
          "action": "longClickCenter",
          "key": 0,
          "name": "①[长按]视频",
          "snapshotUrls": "https://i.gkd.li/i/34420783",
          "excludeSnapshotUrls": "https://i.gkd.li/i/34418998"
        },
        {
          "matches": "@Switch[clickable=true][checked=false] - [text=\"自动连播\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②开启[自动联播]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34423078",
            "https://i.gkd.li/i/34419001"
          ]
        },
        {
          "matches": "@Switch[clickable=true][checked=true] - [text=\"自动连播\"]",
          "action": "back",
          "actionMaximumKey": 2,
          "preKeys": [
            0
          ],
          "key": 2,
          "name": "③已开-按[返回键]",
          "snapshotUrls": "https://i.gkd.li/i/34421280"
        }
      ]
    },
    {
      "name": "青少年模式",
      "desc": "点击【我知道了】（旧版本）【关闭】（新版本）",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "Button[desc=\"开启青少年模式\"] + Button[text=\"我知道了\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13111607"
        },
        {
          "matches": "Button[text=\"开启青少年模式\"] + LinearLayout > Button[text=\"关闭\"]",
          "actionMaximumKey": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13542867"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-功能体验邀请弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[text=\"不再提示\"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^=\"立即体验\"]",
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "key": 0,
          "name": "【首页商城】体验邀请弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13684791"
        }
      ]
    },
    {
      "name": "权限提示-消息提醒弹窗",
      "desc": "点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.lite:id/gl7\"] > [id=\"com.ss.android.ugc.aweme.lite:id/h5q\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13888485",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年弹窗",
      "desc": "点击【我知道了】（旧版本）【关闭】（新版本）",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "Button[desc=\"开启青少年模式\"] + Button[text=\"我知道了\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13111607"
        },
        {
          "matches": "Button[text=\"开启青少年模式\"] + LinearLayout > Button[text=\"关闭\"]",
          "actionMaximumKey": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13542867"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能体验邀请弹窗",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[text=\"不再提示\"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^=\"立即体验\"]",
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "key": 0,
          "name": "【首页商城】体验邀请弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13684791"
        }
      ]
    },
    {
      "name": "朋友推荐弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme.lite:id/close\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
