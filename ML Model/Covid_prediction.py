
# coding: utf-8

# 
# 
# 
# 
# 
# 
# # Importing Libraries

# In[135]:


import pandas as pd
import numpy as np
from sklearn import metrics


# In[136]:


df = pd.read_csv("Dataset1.csv")

# In[145]:


X= df.drop(['Severity'],axis=1)
y= df['Severity']


# In[146]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)


# In[147]:


from sklearn.linear_model import LogisticRegression
model = LogisticRegression(solver = 'lbfgs')
model.fit(X_train, y_train)


# In[148]:


# use the model to make predictions with the test data
y_pred = model.predict(X_test)


# In[149]:


from sklearn.metrics import accuracy_score
accuracy_score(y_test,y_pred)


# In[150]:


import joblib
with open('covid-model.joblib', 'wb') as f:
    joblib.dump(model,f)


# # For All features except Age

# In[151]:


def yes_or_no(value):
    if value == 'Yes':
        return 1
    else:
        return 0


# # For Age

# In[152]:


def correct(value):
    if value == '60+':
        return 4
    elif value == '25-59':
        return 3
    elif value == '20-24':
        return 2
    elif value == '10-19':
        return 1
    else:
        return 0


# In[157]:


def get_user_input():
    
    st.title('Severity of Coronavirus Prediction')
    st.subheader('User Parameters')
    Age = st.slider('Your Age',1,99)
    Fever_cat = st.selectbox("Do you have fever ? ",('No','Yes'))
    Fever = yes_or_no(Fever_cat)
    Fatigue_cat = st.selectbox("Do you have fatigue ? ",('No','Yes'))
    Fatigue = yes_or_no(Fever_cat)
    LOT_cat = st.selectbox("Do you have loss of taste ? ",('No','Yes'))
    LOT = yes_or_no(LOT_cat)
    Breathlessness_cat = st.selectbox("Do you have breathlessness ? ",('No','Yes'))
    Breathlessness = yes_or_no(Breathlessness_cat)
    ST_cat = st.selectbox("Do you have a sore throat ? ",('No','Yes'))
    ST = yes_or_no(ST_cat)
    Pains_cat = st.selectbox("Do you have any body pain ? ",('No','Yes'))
    Pains = yes_or_no(Pains_cat)
    RN_cat = st.selectbox("Do you have a runny nose ? ",('No','Yes'))
    RN = yes_or_no(RN_cat)
    Diarrhea_cat = st.selectbox("Do you have diarrhea ? ",('No','Yes'))
    Diarrhea = yes_or_no(Diarrhea_cat)
    features = {'Fever': Fever,
            'Fatigue': Fatigue,
            'Loss-of-taste': LOT,
            'Breathlessness': Breathlessness,
            'Sore-Throat': ST,
            'Pains' : Pains,
            'Runny-Nose' : RN,
            'Diarrhea' : Diarrhea,
            'Age' : Age
               }
    data = pd.DataFrame(features,index=[0])
    return data


# In[158]:


import streamlit as st
user_input_df = get_user_input()


# In[159]:


def visualize_confidence_level(prediction_proba):
    data = (prediction_proba[0]*100).round(2)
    grad_percentage = pd.DataFrame(data = data,columns = ['Percentage'],index=['no','mild','moderate','severe'])
    max_percentage = grad_percentage['Percentage'].max()
    min_percentage = grad_percentage['Percentage'].min()
    result_index = grad_percentage.idxmax(axis = 0)
    if result_index[0] == 'no':
        st.title('You donot have coronavirus')
    else:
        st.title('Predicting '+ str(max_percentage)+ ' % '+ result_index[0] + ' stage of coronavirus ' )
    return


# In[160]:


st.set_option('deprecation.showPyplotGlobalUse', False)
prediction_proba = model.predict_proba(user_input_df)
visualize_confidence_level(prediction_proba)
