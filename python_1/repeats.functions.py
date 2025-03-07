def displayMenu(): #This displays the menu
    print("Welcome to my calculator.")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

def addNumbers(firstNumber, secondNumber):#function for addition & displaying it
    sum = firstNumber + secondNumber
    print("The sum of", firstNumber, "and", secondNumber, "is", sum)

def subtractNumbers(firstNumber, secondNumber): #function for subtraction and displaying it
    difference = firstNumber - secondNumber
    print("The difference of", firstNumber, "and", secondNumber, "is", difference)

def multiplyNumbers(firstNumber, secondNumber):#function for multiplying and displaying it
    product = firstNumber * secondNumber
    print("The product of", firstNumber, "and", secondNumber, "is", product)

def divideNumbers(firstNumber, secondNumber): #function for dividing and displaying it
    if secondNumber != 0:  # To prevent division by zero
        quotient = firstNumber / secondNumber
        print("The quotient of", firstNumber, "and", secondNumber, "is", quotient)
    else:
        print("Error: Division by zero is not allowed.")

def main():  # This is the main program 
    allFeatures = ["Addtiion", "Subtratction", "Division", "Multiplication", "Module"]

    print ("Here are the features in the application")
    # Start loop 
    # for currentFeature in allFeatures:
    #     print(currentFeature)

    # Advanced loop
    for currentFeatureIndex in range ( len(allFeatures) ):
        print( str( currentFeatureIndex + 1 ) + ". " + allFeatures[ currentFeatureIndex ] )

    # 1. Display the menu to the user 
    # displayMenu() 
    userOption = int(input("Please select an option: "))

    # Getting numbers from the user and converting to integers
    userFirstNumber = int(input("First Number: "))
    userSecondNumber = int(input("Second Number: "))

    # Perform the appropriate operation
    if userOption == 1:
        addNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 2:
        subtractNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 3:
        multiplyNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 4:
        divideNumbers(userFirstNumber, userSecondNumber)
    else:
        print("Invalid option. Please select a valid menu option.")

# Calling the main function
main()
