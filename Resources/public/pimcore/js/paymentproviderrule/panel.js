/*
 * CoreShop.
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) CoreShop GmbH (https://www.coreshop.org)
 * @license    https://www.coreshop.org/license     GPLv3 and CCL
 *
 */

pimcore.registerNS('coreshop.paymentproviderrule.panel');
coreshop.paymentproviderrule.panel = Class.create(coreshop.rules.panel, {
    /**
     * @var string
     */
    layoutId: 'coreshop_carrier_shipping_rule_panel',
    storeId: 'coreshop_carrier_shipping_rules',
    iconCls: 'coreshop_icon_carrier_shipping_rule',
    type: 'coreshop_carriers_shipping_rules',

    routing: {
        add: 'coreshop_shipping_rule_add',
        delete: 'coreshop_shipping_rule_delete',
        get: 'coreshop_shipping_rule_get',
        list: 'coreshop_shipping_rule_list',
        config: 'coreshop_shipping_rule_getConfig'
    },

    getItemClass: function () {
        return coreshop.paymentproviderrule.item;
    }
});
