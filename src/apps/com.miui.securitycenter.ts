// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安全服务/小米手机管家",
  "id": "com.miui.securitycenter",
  "groups": [
    {
      "name": "功能类-USB安装应用,自动点击[继续安装]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "activityIds": "com.miui.permcenter.install.AdbInstallActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13269875",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-禁止获取定位",
      "desc": "关闭\"允许联网及定位\"后，每次打开手机管家都会出现",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[id=\"com.miui.securitycenter:id/title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "activityIds": [
            "com.miui.securityscan.MainActivity",
            "com.miui.permcenter.permissions.SystemAppPermissionDialogActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13474517",
            "https://i.gkd.li/i/13476592"
          ],
          "key": 0
        },
        {
          "matches": [
            "[vid=\"title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "activityIds": [
            "com.miui.securityscan.MainActivity",
            "com.miui.permcenter.permissions.SystemAppPermissionDialogActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13474517",
            "https://i.gkd.li/i/13476592"
          ],
          "key": 1
        },
        {
          "matches": [
            "[id=\"com.miui.securitycenter:id/title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13474517",
            "https://i.gkd.li/import/13476592"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-使用返回退出时直接点击[退出]",
      "desc": "退出时忽略[体检优化分数]/忽略[存储空间预警]",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"体检优化\" || text=\"存储空间预警\"][visibleToUser=true]",
            "[text=\"退出\"][visibleToUser=true]"
          ],
          "activityIds": "com.miui.securityscan.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13474504",
            "https://i.gkd.li/i/13476770",
            "https://i.gkd.li/i/15137908"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18126157",
          "key": 0
        },
        {
          "matches": "[text=\"退出\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13474504",
            "https://i.gkd.li/i/13476770",
            "https://i.gkd.li/i/15137908"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-电量已低于20%",
      "desc": "点击[知道了]",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"知道了\"] + [text=\"省电模式\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14468423",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-高敏感权限自动确定",
      "desc": "勾选[我已知晓可能存在的风险]-10s后点击[确定]",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"我已知晓可能存在的风险，并自愿承担可能导致的后果\"]",
            "@[vid=\"check_box\"][checked=false]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14965657",
            "https://i.gkd.li/i/15242826"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/e9672ccd-8dd1-4060-bdbe-52bb355d404f"
        },
        {
          "matches": "[text=\"确定\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14965656",
            "https://i.gkd.li/i/15242825"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/1f2a118a-db2a-448d-a95d-f10d746b72e3"
        }
      ]
    },
    {
      "name": "功能类-应用信息页-自启动提示",
      "desc": "点击[知道了]/[关闭]",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"开启自启动\"]",
          "action": "back",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15524706"
        },
        {
          "matches": [
            "[text^=\"关闭自启动后将导致\"]",
            "[text=\"关闭\"]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15531343"
        }
      ]
    },
    {
      "name": "功能类-自动允许分享文件",
      "desc": "允许应用通过分享获取手机文件",
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"分享文件\"]",
            "[text=\"允许\"]"
          ],
          "activityIds": "com.miui.wakepath.ui.ConfirmStartActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17174152",
          "exampleUrls": "https://e.gkd.li/02c752e7-3dd9-47dc-819b-e8246de29b6a",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动关闭SIM卡安全保护验证提示",
      "desc": "点击[确定]",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"SIM卡安全保护验证成功\"]",
            "[text=\"确定\"]"
          ],
          "activityIds": [
            "com.miui.simlock.activity.SuccessDialogActivity",
            "com.miui.simlock.activity.SuccessDialogNormalActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17276599",
            "https://i.gkd.li/i/17276586"
          ],
          "exampleUrls": "https://e.gkd.li/2274c673-a2a9-43ad-a5ab-74598787ec0f",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-禁止后台运行弹窗",
      "desc": "点击确定",
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text=\"应用在后台被终止运行，可能会影响应用正常使用。\"]",
            "[text=\"确定\"]"
          ],
          "activityIds": "com.miui.powercenter.legacypowerrank.PowerDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23096094",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-风险提示-仍然支付",
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"仍然支付\"][clickable=true]",
          "activityIds": "com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24717617",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动继续安装",
      "desc": "USB安装应用,点击继续安装",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/13269875",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "关闭【允许联网及定位】后，每次打开手机管家都会出现",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": [
            "[id=\"com.miui.securitycenter:id/title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13474517",
            "https://i.gkd.li/i/13476592"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-USB安装时自动继续安装",
      "desc": "点击USB安装应用时的【继续安装】按钮",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": "https://i.gkd.li/import/13269875",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动继续安装",
      "desc": "USB安装应用,点击继续安装",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": "https://i.gkd.li/import/13269875",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-禁止获取定位",
      "desc": "关闭【允许联网及定位】后，每次打开手机管家都会出现",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": [
            "[id=\"com.miui.securitycenter:id/title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13474517",
            "https://i.gkd.li/import/13476592"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-忽略体检分数",
      "desc": "退出时忽略体检优化分数",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": [
            "[text=\"手机体检分数不足75分，是否立即优化？\"][id$=\"id/message\"]",
            "[text=\"退出\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13474504",
            "https://i.gkd.li/import/13476770"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "自动继续安装",
      "desc": "USB安装应用,点击继续安装",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": "https://i.gkd.li/import/13269875",
          "key": 0
        }
      ]
    },
    {
      "name": "禁止获取定位",
      "desc": "关闭【允许联网及定位】后，每次打开手机管家都会出现",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": [
            "[id=\"com.miui.securitycenter:id/title\"][text=\"获取位置信息\"]",
            "[text=\"不同意\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13474517",
            "https://i.gkd.li/import/13476592"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "忽略体检分数",
      "desc": "退出时忽略体检优化分数",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": [
            "[text=\"手机体检分数不足75分，是否立即优化？\"][id$=\"id/message\"]",
            "[text=\"退出\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13474504",
            "https://i.gkd.li/import/13476770"
          ],
          "key": 0
        }
      ]
    }
  ]
});
