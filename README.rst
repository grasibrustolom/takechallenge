*****
takechallenge
*****

This is an API that comunicates with Github's API. The data is consumed by a chatbot developed on BLiP Plataform.

Dependencies
============

* Axios v0.19.2
* Express v4.17.1

Install dependencies

::

   $ npm install

Deploy
======

* Heroku: https://take-challenge-bot.herokuapp.com

Endpoint
#######
::

   $ GET /repositories

Response
#######
.. code-block:: javascript

  {  
      "0": {  ... //repo info } 
      "1": {  ... //repo info } 
      ...
  }



