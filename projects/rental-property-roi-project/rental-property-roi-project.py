"""
ROI calculator
Start with a general property class: (# Units, Income, Expenses, Cash Flow, Cash on Cash ROI)
Include various methods for calculating income, expenses, cashflow, and a method to calculate ROI using the other calculated variables
"""
from IPython.display import clear_output

class Rental_Property():
        # Income
        # Expenses
        # Cash Flow
        # ROI
        # Print Statement of calculated attributes
    def __init__(self, num_units=1, income=0, expenses=0, annual_cashflow=0, total_investment=0, target_roi = 10.0, roi = 0, property_num = 1, roi_dict = {}):
        self.num_units = num_units
        self.income = income
        self.expenses = expenses
        self.annual_cashflow = annual_cashflow
        self.target_roi = target_roi
        self.total_investment = total_investment
        self.roi = roi
        self.property_num = property_num
        self.roi_dict = roi_dict

    #function to start the ROI calculator program
    def start(self):
        print("Welcome to the ROI calculator.")
        print("Please gather your paperwork. We will need some numbers in order to calculate the ROI on your future property.")
        self.target_roi = input("To begin, is there a target ROI that you would like to achieve? If not, the default will be 10%. ")
        if self.target_roi == "":
            self.target_roi = 10.0
        else:
            self.target_roi = float(self.target_roi)
        self.program()
    
    def program(self):
        self.num_units = int(input("How many units are in the property? "))
        self.calc_income()
        self.calc_expenses()
        self.calc_cashflow()
        self.calc_total()
        self.calc_roi()
        self.property_dict()
        clear_output()
        if self.target_roi > self.roi:
            print(f"The ROI for this property will be {self.roi}%. Compared to your target ROI of {self.target_roi}%, your expenses and investments for this property are too high.")
        else:
            print(f"The ROI for this property will be {self.roi}%. You should buy considering your target ROI is {self.target_roi}%.")
        print(self.roi_dict)
        end = input("Would you like to make any changes or calculate the ROI of a different property? (Y/N) ")
        if end.lower() == "y":
            self.repeat()
        else:
            print("Thank you for using our ROI investment program. Have a nice day!")

    def repeat(self):
        change = input("Would you like to change a previous property submitted? (Y/N) ")
        if change.lower() == "y":
            change_property = int(input("Please enter the property number that you would like to change? (See printed list above) "))
            self.property_num = change_property
            self.target_roi = input("Target ROI? ")
            if self.target_roi == "":
                self.target_roi = 10.0
            else:
                self.target_roi = float(self.target_roi)
            self.program()
        else:
            self.target_roi = input("Target ROI? ")
            if self.target_roi == "":
                self.target_roi = 10.0
            else:
                self.target_roi = float(self.target_roi)
            self.program()

    # function to calculate the estimated income
    def calc_income(self):
        print("Next, we will need to calculate the estimated income from the prospective property.")
        rent_income = self.calc_rent()
        misc_income = int(input("Total of other miscellaneous incomes(ie. storage, laundry, etc). "))
        total_income = rent_income + misc_income
        self.income = total_income
        print(f"Your total rental income is {self.income}.")

    def calc_rent(self):
        unit_dict = {}
        rent_income = []
        while self.num_units > 0:
            unit_rent = int(input(f'For unit number {self.num_units}, what is the estimated rental income? '))
            rent_income.append(unit_rent)
            unit_dict[f'Unit {self.num_units}'] = unit_rent
            self.num_units -= 1
        return sum(rent_income)

    def calc_expenses(self):
        print("Thank you for your income information. Now we will need to calculate expenses.")
        tax = int(input("How much do you expect to pay in taxes? (This can be based on property cost, deductions, expenses, profit) "))
        insurance = int(input("How much do you expect to pay for insurance? (Double check if insurance is included within your mortgage) "))
        utilities = int(input("How much do you expect to pay in utilities? (input 0 if the tenant pays for utilities) "))
        HOA = int(input("Is this property located in an area that requires HOA(Homeowner's Association) fees? If so how much are those fees? "))
        Lawn_Snow = int(input("What is the expected cost of lawn maintenance/snow removal? (input 0 if tenant will maintain/clear) "))
        vacancy = int(input("How much are you willing to set aside for any period of vacancies? (Typically 5% of rental income) "))
        repairs = int(input("How much are you willing to set aside for any repairs that need to be done for the property? "))
        capEx = int(input("How much are you willing to set aside for Capital Expenditures (Also typically about 5% of rental income) "))
        property_management = self.prop_mg()
        mortgage = int(input("How much is your mortgage? "))
        self.expenses = tax + insurance + utilities + HOA + Lawn_Snow + vacancy + repairs + capEx + property_management + mortgage
        print(f"The total expense amount of this rental property per month would be {self.expenses}.")

    def prop_mg(self):
        pm = (input("Will you be managing this property on your own? Y/N? "))
        if pm.lower() == "n":
            return int(input("How much does property management cost? "))
        else:
            return 0

    def calc_cashflow(self):
        cash_flow = self.income - self.expenses
        self.annual_cashflow = cash_flow * 12

    def calc_total(self):
        down = int(input("How much is the down payment on the property? "))
        close = int(input("How much are the closing costs? (ie. appraisal/lawyer fees etc.) "))
        rehab = int(input("How much money will need to be invested to cover any renovations or rehabiliation of the property? "))
        misc = int(input("Are there any miscellaneous costs in regards to extra investments for the property? "))
        self.total_investment = down + close + rehab + misc

    def calc_roi(self):
        roi = ((self.annual_cashflow/self.total_investment) * 100)
        self.roi = float(roi)
        self.roi = round(self.roi, 2)
        
    def property_dict(self):
        new_dict = {}
        new_dict[f'Property #{self.property_num}'] = f"ROI: {self.roi}"
        self.roi_dict.update(new_dict)
        self.property_num = self.property_num + 1

def run():
    rent = Rental_Property()
    rent.start()
    
run()