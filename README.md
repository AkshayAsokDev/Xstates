# Xstates
XStates buildout 

----------------------
Requirements
1. Upon initial render, 3 dropdowns (Select Country, Select State, Select City) must appear out of which only the first one must be allowing the users to view the dropdown list
2. When you click on Select Country, you must get a dropdown menu of country names
3. When you select a particular country (e.g. Australia), you must be able to further select state using the Select State dropdown, but you must not be able to use the Select City dropdown yet.
4. Once you click on Select State, you must get a dropdown of list of states present in the selected country. For example, in our case, we must only be able to see the states that are a part of Australia
5. Once you select a particular state, you must be able to choose a city using the Select City dropdown
6. Once you click on Select City, you must get a dropdown of list of cities present in the selected state. For example, in our case, we must only be able to see the cities that are a part of Western Australia
7. Once you select a particular city, you must get a statement on the frontend in the following format:
    “You selected City, State, Country”