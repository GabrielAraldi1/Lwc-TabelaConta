public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, BillingState, Phone, NumberOfEmployees, Website
         FROM Account];
    }
}