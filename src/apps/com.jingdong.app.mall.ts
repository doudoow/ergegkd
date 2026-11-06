// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京东",
  "id": "com.jingdong.app.mall",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeActivityIds": "com.jd.lib.search.view.Activity.SearchActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16323111",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16323115"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeActivityIds": "com.jd.lib.search.view.Activity.SearchActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17602356",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16323115"
        }
      ]
    },
    {
      "name": "局部广告-购物车页面砸金蛋",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14731003",
          "key": 0
        },
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "activityIds": ".MainFrameActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14731003",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "关闭首页悬浮广告、参与调研提示、红包弹窗和购物车砸金蛋",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642270",
            "https://i.gkd.li/i/12774910"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15110548"
        },
        {
          "matches": "@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13242002"
        },
        {
          "matches": "[desc=\"关闭浮层icon\"][clickable=true][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13165659",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/13072091",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/15077913"
          ]
        },
        {
          "anyMatches": [
            "FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + ImageView[!(desc=\"返回\")][visibleToUser=true]",
            "FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + *[childCount=1] > ImageView[!(desc=\"返回\")][visibleToUser=true]"
          ],
          "key": 3,
          "name": "参与调研",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642270",
            "https://i.gkd.li/i/21793011"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/12774910",
            "https://i.gkd.li/i/15110548"
          ]
        },
        {
          "matches": "RelativeLayout >n * > [desc^=\"关闭\" && !(id*=\"egg\")][clickable=true][visibleToUser=true]",
          "key": 4,
          "name": "首页贴边广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13165659",
            "https://i.gkd.li/import/12837870",
            "https://i.gkd.li/import/13072091",
            "https://i.gkd.li/import/12837870",
            "https://i.gkd.li/i/17690650"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15077913"
        },
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "fastQuery": true,
          "key": 5,
          "name": "购物车页面砸金蛋",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642266",
            "https://i.gkd.li/i/14731003"
          ]
        },
        {
          "matches": "@ImageView[id^=\"com.jd.lib.personal.feature\"][index=parent.childCount.minus(1)] <<(3,4) RelativeLayout > LinearLayout[id=null][childCount=2] > ImageView[id^=\"com.jd.lib.personal.feature\"][index=0]",
          "key": 6,
          "name": "推推红包",
          "snapshotUrls": [
            "https://i.gkd.li/i/20532279",
            "https://i.gkd.li/i/20532280",
            "https://i.gkd.li/i/23693918"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/21343338"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text=\"开启消息通知\"]",
          "activityIds": [
            ".MainFrameActivity",
            "com.jd.lib.message.messagecenter"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13917163",
            "https://i.gkd.li/i/13463618",
            "https://i.gkd.li/i/14692570",
            "https://i.gkd.li/i/18060234"
          ]
        },
        {
          "matches": "@[clickable=true] + [text^=\"打开系统通知\"]",
          "activityIds": "com.jd.lib.message.messagecenter",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12839865"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <n * > [text=\"开启消息通知\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13917163",
            "https://i.gkd.li/i/13463618",
            "https://i.gkd.li/i/14692570"
          ]
        },
        {
          "matches": "@[clickable=true] + [text^=\"打开系统通知\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12839865"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 4,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > [desc=\"关闭\"]",
          "excludeMatches": "[text=\"确定\" || text=\"加入购物车\" || text*=\"购买\" || text*=\"下单\"][visibleToUser=true]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13165721",
            "https://i.gkd.li/i/15364514"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18455760"
        },
        {
          "matches": "[vid=\"close\"][desc=\"关闭页面\"]",
          "activityIds": [
            "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13218034",
            "https://i.gkd.li/i/14927060"
          ]
        },
        {
          "matches": "[desc=\"关闭页面\" || desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "excludeMatches": [
            "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
            "TextView[text=\"退换/售后\"][id=null]",
            "[text=\"立即购买\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.jingdong.app.mall.MainFrameActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847",
            "https://i.gkd.li/i/15416926",
            "https://i.gkd.li/i/15862131",
            "https://i.gkd.li/i/16818580",
            "https://i.gkd.li/i/24170046"
          ]
        },
        {
          "matches": "[text^=\"惊喜福利来袭\"][visibleToUser=true]",
          "action": "back",
          "actionMaximum": 1,
          "activityIds": ".MainFrameActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17974166",
          "exampleUrls": "https://e.gkd.li/580d3cb5-503e-47a9-ba88-056e91c2f084"
        },
        {
          "matches": "@FrameLayout[clickable=true] > [desc=\"关闭\"]",
          "excludeMatches": "[text=\"确定\" || text=\"加入购物车\" || text*=\"购买\" || text*=\"下单\"][visibleToUser=true]",
          "activityIds": ".MainFrameActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13165721",
            "https://i.gkd.li/i/15364514"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18455760"
        },
        {
          "matches": "[desc=\"关闭页面\" || desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "excludeMatches": [
            "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
            "TextView[text=\"退换/售后\"][id=null]",
            "[text=\"立即购买\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".MainFrameActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847",
            "https://i.gkd.li/i/15416926",
            "https://i.gkd.li/i/15862131",
            "https://i.gkd.li/i/16818580",
            "https://i.gkd.li/i/24170046"
          ]
        }
      ]
    },
    {
      "name": "局部广告-横幅广告",
      "desc": "关闭页面顶部横幅广告和吸顶广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView < FrameLayout - FrameLayout > ImageView[desc=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13258973",
            "https://i.gkd.li/i/13258980",
            "https://i.gkd.li/i/13258981"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] - * > [text=\"去续费\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15047238"
        },
        {
          "matches": "[desc=\"吸顶楼层\"] > [desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15112953"
        },
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/plus_close\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15229577"
        },
        {
          "anyMatches": [
            "ImageView < FrameLayout[index=0] < ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc=\"关闭\"][visibleToUser=true]",
            "View + FrameLayout[index=1] <2 ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc=\"关闭\"][visibleToUser=true]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13258973",
            "https://i.gkd.li/import/13258980",
            "https://i.gkd.li/import/13258981",
            "https://i.gkd.li/i/22319329",
            "https://i.gkd.li/i/26164414"
          ]
        },
        {
          "matches": "@View[desc.length=null][clickable=true][longClickable=false][visibleToUser=true][id=null][right>parent.right.minus(140)][top<=parent.top.plus(30)] -n ImageView[id=null] <n RelativeLayout[id=null]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/14163014"
        },
        {
          "anyMatches": [
            "ImageView +n ViewGroup >2 [text.length>0] < ViewGroup + @ViewGroup[clickable=true][visibleToUser=true][right>parent.right.minus(180)] > ImageView <<n RelativeLayout[id^=\"com.jd.lib.personal.feature:id/\"]",
            "@ViewGroup[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true][right>parent.right.minus(180)] -2 ViewGroup[childCount<=1][index=0] + ViewGroup[childCount=2] >2 [text.length>0&&text.length<=3] <<n RelativeLayout[id^=\"com.jd.lib.personal.feature:id/\"]"
          ],
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/15047238",
            "https://i.gkd.li/i/17001455",
            "https://i.gkd.li/i/21344132",
            "https://i.gkd.li/i/23694139"
          ]
        },
        {
          "anyMatches": [
            "[desc=\"吸顶楼层\"] > [desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
            "ImageView[clickable=false] < @ViewGroup[clickable=true] <<4 [desc=\"吸顶楼层\"]"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/15112953",
            "https://i.gkd.li/i/26164445"
          ]
        }
      ]
    },
    {
      "name": "功能类-京东账号登录授权",
      "desc": "自动点击\"确认登录\"",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"京东登录\"] > [desc=\"确认登录\"]",
          "key": 0
        },
        {
          "matches": "@[desc=\"确认登录\"][clickable=true] > [text=\"确认登录\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-支付页面产品推荐",
      "desc": "自动点击右上角\"x\"",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[clickable=true && desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-购物车页面支付成功弹窗广告",
      "desc": "自动点击正下方的\"x\"",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "snapshotUrls": "https://i.gkd.li/i/13446362",
          "key": 0
        },
        {
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13446362",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-加入购物车后出现的弹窗",
      "desc": "点击[继续逛]",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"继续逛\"]",
          "activityIds": "com.jd.lib.productdetail.ProductDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15047243",
          "key": 0
        },
        {
          "matches": "[text=\"继续逛\"][clickable=true]",
          "activityIds": "com.jd.lib.productdetail.ProductDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15047243",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-支付订单后点击[完成]",
      "key": 10,
      "rules": [
        {
          "matches": "[vid=\"lib_cashier_finish_back_page_text\"]",
          "activityIds": ".bundle.cashierfinish.view.CashierUserContentCompleteActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17358003",
          "exampleUrls": "https://e.gkd.li/ab886df0-2b34-4804-be7d-742a06fadda9",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-支付订单后跳过开通[刷脸支付]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"开启刷脸支付\"][visibleToUser=true]",
          "action": "back",
          "activityIds": "com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20709175",
          "exampleUrls": "https://e.gkd.li/bad5489e-0ec6-4039-8e4e-52b4b444f019",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-展开全部订单信息",
      "desc": "订单已完成-点击全部订单信息",
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"全部订单信息\"][clickable=true][visibleToUser=true]",
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "match",
          "snapshotUrls": "https://i.gkd.li/i/24372039",
          "exampleUrls": "https://e.gkd.li/e1a3b6f7-b6cb-4379-90b5-cb4b927dacc4",
          "key": 0
        },
        {
          "matches": "[text=\"全部订单信息\" || desc=\"全部订单信息\"][clickable=true][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": [
            "com.jd.lib.ordercenter.taro.OrderDetailActivityTaro"
          ],
          "fastQuery": true,
          "resetMatch": "match",
          "snapshotUrls": [
            "https://i.gkd.li/i/24372039",
            "https://i.gkd.li/i/29404102"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e1a3b6f7-b6cb-4379-90b5-cb4b927dacc4",
            "https://e.gkd.li/f1b6b284-ce65-48e6-83b8-1c6052fbbfa3"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭各种全屏广告弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "FrameLayout > [desc=\"关闭\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13165721"
        },
        {
          "matches": "[vid=\"webview\"] + [vid=\"close\"][desc=\"关闭页面\"]",
          "activityIds": [
            "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13218034",
            "https://i.gkd.li/i/14927060"
          ]
        },
        {
          "matches": "@[desc=\"关闭按钮\"] <n * >n [desc=\"弹窗\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/132599029"
          ]
        },
        {
          "matches": "RelativeLayout > ImageView[desc=\"关闭页面\"]",
          "excludeMatches": "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847"
          ]
        },
        {
          "matches": "[name$=\"Layout\"][childCount=2][text=null][desc=null][visibleToUser=true] > @ImageView[desc*=\"关闭\"][visibleToUser=true] - [name$=\"Layout\"||desc=\"弹窗\"]",
          "excludeMatches": [
            "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
            "TextView[text=\"退换/售后\"][id=null]",
            "[text=\"立即购买\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.jingdong.app.mall.MainFrameActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity",
            "com.jd.lib.cashier.complete.view.CashierCompleteActivity"
          ],
          "matchTime": 10000,
          "resetMatch": "activity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13258996",
            "https://i.gkd.li/import/13218034",
            "https://i.gkd.li/import/14162769",
            "https://i.gkd.li/import/13241883",
            "https://i.gkd.li/import/13259029",
            "https://i.gkd.li/i/15416926",
            "https://i.gkd.li/i/15862131",
            "https://i.gkd.li/i/14927060",
            "https://i.gkd.li/i/14445257"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/13336847",
            "https://i.gkd.li/i/18455760",
            "https://i.gkd.li/i/16818580",
            "https://i.gkd.li/i/24170046"
          ]
        },
        {
          "anyMatches": [
            "[id=\"android:id/content\"] > RelativeLayout > RelativeLayout > *[childCount=2] > ImageView[index=1][clickable=true][!(desc=\"拍照购\")]",
            "ViewGroup[childCount>=2] > FrameLayout + FrameLayout > ImageView[desc=\"关闭\"]"
          ],
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14612925",
            "https://i.gkd.li/i/17974166",
            "https://i.gkd.li/i/15364514",
            "https://i.gkd.li/i/13165721"
          ]
        },
        {
          "matches": [
            "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]"
          ],
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "fastQuery": true,
          "key": 6,
          "name": "购物车页面支付成功广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13446362"
        },
        {
          "matches": [
            "[text=\"继续逛\"][clickable=true]"
          ],
          "activityIds": "com.jd.lib.productdetail.ProductDetailActivity",
          "fastQuery": true,
          "key": 7,
          "name": "加入购物车后出现的弹窗",
          "snapshotUrls": "https://i.gkd.li/i/15047243"
        },
        {
          "matches": "[id=\"com.jingdong.app.mall:id/webview\"] + [id=\"com.jingdong.app.mall:id/close\"][desc=\"关闭页面\"]",
          "activityIds": "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/import/13218034"
        },
        {
          "matches": "@[desc=\"关闭按钮\"] <n * >n *[desc=\"弹窗\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/import/13241883",
            "https://i.gkd.li/import/132599029"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-购物车页面支付成功广告弹窗",
      "desc": "自动点击正下方的\"x\"",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "snapshotUrls": "https://i.gkd.li/i/13446362",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-支付订单后点击[完成/回首页]",
      "desc": "点击支付完成后的[完成/回首页]按钮",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[vid=\"lib_cashier_finish_back_page_text\" || text=\"回首页\"][clickable=true][visibleToUser=true]",
          "activityIds": ".bundle.cashierfinish.view.CashierUserContentCompleteActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17358003",
            "https://i.gkd.li/i/29404312"
          ],
          "exampleUrls": [
            "https://e.gkd.li/ab886df0-2b34-4804-be7d-742a06fadda9",
            "https://e.gkd.li/6c5466d4-3238-43b7-8cf5-312f8c8606ef"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-确认收货成功-返回",
      "desc": "点击左上角 返回",
      "key": 16,
      "rules": [
        {
          "matches": "@[desc=\"返回\"][clickable=true] + * > [text=\"确认收货成功\"]",
          "activityIds": "com.jd.lib.ordercenter.confirmreceive.ConfirmReceiveActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25181413",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "关闭消息通知开启提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text=\"开启消息通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12839864",
            "https://i.gkd.li/import/13772299",
            "https://i.gkd.li/import/13917163",
            "https://i.gkd.li/i/13463618",
            "https://i.gkd.li/i/14692570",
            "https://i.gkd.li/i/18060234"
          ],
          "key": 0
        },
        {
          "matches": "ImageView < @FrameLayout[clickable=true] + TextView[text^=\"打开系统通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/12839865",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-关闭支付时各类开通弹窗",
      "desc": "关闭支付时弹出的免密、快付、人脸等弹窗",
      "enable": false,
      "actionMaximum": 2,
      "resetMatch": "app",
      "key": 18,
      "rules": [
        {
          "matches": [
            "[text*=\"《\"&&text*=\"协议\"]",
            "[text*=\"暂不\"||desc=\"关闭\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/19918601",
            "https://i.gkd.li/i/20033983",
            "https://i.gkd.li/i/20265504",
            "https://i.gkd.li/i/20709175"
          ]
        },
        {
          "matches": "@ImageView[id!=\"\"][clickable=true] <n * > [(text*=\"京东快付\"||text=\"设置默认支付工具\")&&text.length<=8]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/20516256",
            "https://i.gkd.li/i/23832919"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-购物车界面-砸金蛋",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-我的界面-悬浮广告",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!=\"返回\"][visibleToUser=true]",
          "key": 0,
          "name": "参与调研",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642270",
            "https://i.gkd.li/import/12774910"
          ]
        },
        {
          "matches": "@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView",
          "key": 1,
          "name": "邀好友得红包",
          "snapshotUrls": "https://i.gkd.li/import/13242002"
        }
      ]
    },
    {
      "name": "局部广告-首页-右侧浮层广告",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "RelativeLayout >n * > [desc^=\"关闭浮层\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知提示-请求打开通知",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "TextView[text=\"开启消息通知\"] +n ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12839864",
            "https://i.gkd.li/import/13772299",
            "https://i.gkd.li/import/13917163"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text ^=\"打开系统通知\"] - FrameLayout[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12839865",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-底部横幅广告",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "ImageView < FrameLayout - FrameLayout > ImageView[desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗-打开通知",
      "desc": "自动点击正下方的【x】",
      "enable": false,
      "fastQuery": true,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.jingdong.app.mall:id/btn_close\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/import/13463618",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-支付界面-产品推荐",
      "desc": "自动点击右上角【x】",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "ImageView[clickable=true && desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-购物车界面-支付成功广告弹窗",
      "desc": "自动点击正下方的【x】",
      "enable": false,
      "fastQuery": true,
      "key": 26,
      "rules": [
        {
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "snapshotUrls": "https://i.gkd.li/import/13446362",
          "key": 0
        }
      ]
    },
    {
      "name": "购物车界面-砸金蛋",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "我的界面-悬浮广告",
      "enable": false,
      "key": 28,
      "rules": [
        {
          "matches": "FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!=\"返回\"][visibleToUser=true]",
          "key": 0,
          "name": "参与调研",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642270",
            "https://i.gkd.li/import/12774910"
          ]
        },
        {
          "matches": "@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView",
          "key": 1,
          "name": "邀好友得红包",
          "snapshotUrls": "https://i.gkd.li/import/13242002"
        }
      ]
    },
    {
      "name": "首页-右侧浮层广告",
      "enable": false,
      "key": 29,
      "rules": [
        {
          "matches": "RelativeLayout >n * > [desc^=\"关闭浮层\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求打开通知",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "TextView[text=\"开启消息通知\"] +n ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12839864",
            "https://i.gkd.li/import/13772299",
            "https://i.gkd.li/import/13917163"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text ^=\"打开系统通知\"] - FrameLayout[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12839865",
          "key": 1
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "FrameLayout > [desc=\"关闭\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13165721"
        },
        {
          "matches": "[id=\"com.jingdong.app.mall:id/webview\"] + [id=\"com.jingdong.app.mall:id/close\"][desc=\"关闭页面\"]",
          "activityIds": "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13218034"
        },
        {
          "matches": "@[desc=\"关闭按钮\"] <n * >n *[desc=\"弹窗\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13241883",
            "https://i.gkd.li/import/132599029"
          ]
        },
        {
          "matches": "RelativeLayout > ImageView[desc=\"关闭页面\"]",
          "excludeMatches": "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "quickFind": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13258996",
            "https://i.gkd.li/import/13336847"
          ]
        }
      ]
    },
    {
      "name": "首页-底部横幅广告",
      "enable": false,
      "key": 32,
      "rules": [
        {
          "matches": "ImageView < FrameLayout - FrameLayout > ImageView[desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页弹窗-打开通知",
      "desc": "自动点击正下方的【x】",
      "enable": false,
      "quickFind": true,
      "key": 33,
      "rules": [
        {
          "matches": "[id=\"com.jingdong.app.mall:id/btn_close\"]",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/import/13463618",
          "key": 0
        }
      ]
    },
    {
      "name": "京东账号登录授权",
      "desc": "自动点击【确认登录】",
      "enable": false,
      "key": 34,
      "rules": [
        {
          "matches": "[text=\"京东登录\"] > [desc=\"确认登录\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "支付界面-产品推荐",
      "desc": "自动点击右上角【x】",
      "enable": false,
      "key": 35,
      "rules": [
        {
          "matches": "ImageView[clickable=true && desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "购物车界面-支付成功广告弹窗",
      "desc": "自动点击正下方的【x】",
      "enable": false,
      "quickFind": true,
      "key": 36,
      "rules": [
        {
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "snapshotUrls": "https://i.gkd.li/import/13446362",
          "key": 0
        }
      ]
    }
  ]
});
