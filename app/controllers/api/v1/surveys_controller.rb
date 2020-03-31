class Api::V1::SurveysController < ApplicationController

  def index
    render json: Survey.all
  end

  def create
    survey = Survey.create(survey_params)
    render json: survey
  end

  def destroy
    survey = Survey.destroy(params[:id])
    head :ok
  end

  def update
    survey = Survey.find(params[:id])
    survey.update(survey_params)
    render json: survey
  end

  private

  def survey_params
    params.require(:survey).permit(:id,:name,:status)
  end

end
