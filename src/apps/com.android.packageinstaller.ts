// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "软件包安装程序",
  "id": "com.android.packageinstaller",
  "groups": [
    {
      "name": "功能类-自动安装应用",
      "desc": "点击[安装/继续安装/完成]",
      "enable": false,
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"继续安装\"][focusable=true || parent.focusable=true || parent.parent.focusable=true]",
          "key": 0,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206444",
            "https://i.gkd.li/i/14046749",
            "https://i.gkd.li/i/16550275",
            "https://i.gkd.li/i/23621117"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23621105"
        },
        {
          "matches": "[text=\"完成\"]",
          "key": 1,
          "name": "点击[完成]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206476",
            "https://i.gkd.li/i/13766420",
            "https://i.gkd.li/i/13962438",
            "https://i.gkd.li/i/14138323",
            "https://i.gkd.li/i/14471862",
            "https://i.gkd.li/i/16550273"
          ]
        },
        {
          "matches": "[vid=\"confirm_bottom_button_layout\"]",
          "key": 2,
          "name": "点击[安装]",
          "snapshotUrls": "https://i.gkd.li/i/14228348"
        },
        {
          "matches": "LinearLayout[childCount=1] > Button[text=\"取消\"][childCount=0]",
          "excludeMatches": "[text=\"继续安装\" || text=\"完成\"]",
          "position": {
            "left": "width * 1.5394",
            "top": "height * 0.5"
          },
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14969116",
            "https://i.gkd.li/i/17158050"
          ]
        },
        {
          "matches": "[text=\"继续安装\"]",
          "activityIds": [
            "com.android.packageinstaller.PackageInstallerActivity",
            "com.android.packageinstaller.FlymePackageInstallerActivity"
          ],
          "key": 4,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206444",
            "https://i.gkd.li/i/14046749",
            "https://i.gkd.li/i/16550275"
          ]
        },
        {
          "matches": "[text=\"完成\"]",
          "activityIds": [
            "com.android.packageinstaller.NewInstallInstalling",
            "com.android.packageinstaller.InstallSuccess",
            "com.android.packageinstaller.oplus.InstallAppProgress",
            "com.android.packageinstaller.FlymePackageInstallerActivity"
          ],
          "key": 5,
          "name": "点击[完成]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206476",
            "https://i.gkd.li/i/13766420",
            "https://i.gkd.li/i/13962438",
            "https://i.gkd.li/i/14138323",
            "https://i.gkd.li/i/14471862",
            "https://i.gkd.li/i/16550273"
          ]
        },
        {
          "matches": "[vid=\"confirm_bottom_button_layout\"]",
          "activityIds": "com.android.packageinstaller.DeleteStagedFileOnResult",
          "fastQuery": true,
          "key": 6,
          "name": "点击[安装]",
          "snapshotUrls": "https://i.gkd.li/i/14228348"
        },
        {
          "matches": "[vid=\"checkbox\"][checked=false]",
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "fastQuery": true,
          "key": 7,
          "name": "勾选[已了解此应用未经检测，可能存在风险]",
          "snapshotUrls": "https://i.gkd.li/i/14595443"
        },
        {
          "matches": "[vid=\"buttons_panel\"]",
          "excludeMatches": [
            "[text=\"继续安装\"]",
            "[text=\"完成\"]"
          ],
          "position": {
            "left": "width * 0.7185",
            "top": "width * 0.1157"
          },
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/14969116"
        },
        {
          "anyMatches": [
            "[text=\"继续安装\"][clickable=true][focusable=true]",
            "@[clickable=true][focusable=true] >(1,2,4) [text=\"继续安装\"]"
          ],
          "key": 9,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206444",
            "https://i.gkd.li/i/14046749",
            "https://i.gkd.li/i/16550275",
            "https://i.gkd.li/i/23621117",
            "https://i.gkd.li/i/34127356"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23621105",
            "https://i.gkd.li/i/22870985"
          ]
        },
        {
          "anyMatches": [
            "[text=\"完成\"][clickable=true][focusable=true]",
            "@[clickable=true][focusable=true] >(1,2,4) [text=\"完成\"]"
          ],
          "excludeMatches": "[text^=\"应用未安装\" || text*=\"安装失败\"]",
          "key": 10,
          "name": "点击[完成]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206476",
            "https://i.gkd.li/i/13766420",
            "https://i.gkd.li/i/13962438",
            "https://i.gkd.li/i/14138323",
            "https://i.gkd.li/i/14471862",
            "https://i.gkd.li/i/16550273",
            "https://i.gkd.li/i/25816401",
            "https://i.gkd.li/i/33746542",
            "https://i.gkd.li/i/34127373"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/26314449",
          "exampleUrls": "https://e.gkd.li/00166afa-f8cb-4389-87b0-948a5a75f3d5"
        },
        {
          "matches": "@LinearLayout > [text=\"继续安装\"]",
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/import/13206444"
        },
        {
          "matches": "@[clickable=true][childCount=1] > [text=\"完成\"]",
          "preKeys": 0,
          "activityIds": "com.android.packageinstaller.NewInstallInstalling",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/import/13206476"
        },
        {
          "matches": "[id=\"com.android.packageinstaller:id/done_button\"][text=\"完成\"][clickable=true]",
          "preKeys": 0,
          "activityIds": "com.android.packageinstaller.NewInstallInstalling",
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/import/13766420"
        },
        {
          "matches": "LinearLayout[childCount=1] > Button[text=\"取消\"][childCount=0]",
          "excludeMatches": "[text=\"继续安装\" || text=\"完成\"]",
          "position": {
            "left": "width * 1.5394",
            "top": "height * 0.5"
          },
          "activityIds": [
            ".PackageInstallerActivity",
            ".DeleteStagedFileOnResult"
          ],
          "fastQuery": true,
          "key": 14,
          "snapshotUrls": [
            "https://i.gkd.li/i/14969116",
            "https://i.gkd.li/i/17158050"
          ]
        }
      ]
    },
    {
      "name": "功能类-授权本次安装",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tv_install_guide\"][text*=\"授权本次安装\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.4609",
            "top": "height * 0.75"
          },
          "activityIds": ".PackageInterceptActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24465121",
          "exampleUrls": "https://e.gkd.li/6ad6e4c6-3cb7-41b2-a37b-bcaa3c06de34",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动继续安装高危风险应用",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"该应用存在高危风险\"][visibleToUser=true]",
            "@[clickable=true] >2 [text=\"仍要继续\"][visibleToUser=true]"
          ],
          "activityIds": ".PackageInterceptActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24540505",
          "exampleUrls": "https://e.gkd.li/2961e749-6aac-4f74-b7f7-268ecc0e14f4",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-勾选[已了解此应用未经检测，可能存在风险]",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"checkbox\" || vid=\"deleted_file_state_cb\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14595443",
            "https://i.gkd.li/i/22870985"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true][id=null] > [text=\"继续安装\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/22870985",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-继续安装高风险应用",
      "desc": "点击[仍要继续/无视风险安装]",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text*=\"风险\"][text*=\"发现\" || text*=\"存在\"][visibleToUser=true]",
            "@[clickable=true][focusable=true] >2 [text=\"仍要继续\" || text=\"无视风险安装\"]"
          ],
          "activityIds": ".PackageInterceptActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/24540505",
            "https://i.gkd.li/i/31602264"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2961e749-6aac-4f74-b7f7-268ecc0e14f4",
            "https://e.gkd.li/f23d301b-22d0-4c9f-b208-c1d9b6425b9d"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-勾选[已了解应用风险检测结果]",
      "desc": "配合 自动安装应用 规则使用",
      "order": -1,
      "key": 5,
      "rules": [
        {
          "matches": "CheckBox[vid=\"checkbox\" || vid=\"deleted_file_state_cb\"][checked=false]",
          "activityIds": [
            ".PackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallStart"
          ],
          "forcedTime": 10000,
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14595443",
            "https://i.gkd.li/i/22870985"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23621117",
          "exampleUrls": [
            "https://e.gkd.li/8ebedfcf-9d68-485c-b4b1-e8e2dc42bbd8",
            "https://e.gkd.li/d197b6ad-a931-498f-b817-fb90c911d67b"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-InstallerX自动安装",
      "desc": "InstallerX无特权情况下自动确认",
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"android:id/button1\"][text=\"更新\" || text=\"安装\"][visibleToUser=true]",
          "activityIds": ".PackageInstallerActivity",
          "fastQuery": true,
          "name": "点击[安装/更新]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29594607",
            "https://i.gkd.li/i/29594599"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-确认[未查询到此应用的 ICP 核准信息]",
      "matchTime": 10000,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": [
            "TextView[text*=\"未查询到此应用的 ICP 核准信息\"]",
            "@Button[text=\"知道了\"] -n Button[text=\"取消安装\"]"
          ],
          "activityIds": ".PackageInstallerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34431696",
          "key": 0
        }
      ]
    },
    {
      "name": "自动安装应用",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "@LinearLayout > [text=\"继续安装\"]",
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13206444"
        },
        {
          "matches": "@[clickable=true][childCount=1] > [text=\"完成\"]",
          "preKeys": 0,
          "activityIds": "com.android.packageinstaller.NewInstallInstalling",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13206476"
        },
        {
          "matches": "[id=\"com.android.packageinstaller:id/done_button\"][text=\"完成\"][clickable=true]",
          "preKeys": 0,
          "activityIds": "com.android.packageinstaller.NewInstallInstalling",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13766420"
        }
      ]
    }
  ]
});
