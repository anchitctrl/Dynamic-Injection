public with sharing class LWCConfigurationService {
    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> getConfigurations() {
        List<Map<String, Object>> configList = new List<Map<String, Object>>();
        for (Dynamic_LWC_Configuration__mdt config : [SELECT MasterLabel, Order__c, Component_Name__c FROM Dynamic_LWC_Configuration__mdt ORDER BY Order__c ASC]) {
            Map<String, Object> step = new Map<String, Object>{
                'label' => config.MasterLabel,
                'order' => config.Order__c,
                'componentName' => config.Component_Name__c
            };
            configList.add(step);
        }
        return configList;
    }
}