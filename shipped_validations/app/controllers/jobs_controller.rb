class JobsController < ApplicationController
  def new
    @job = Job.new
  end

  def create
    @job = Job.create(job_params)
  end

  def destroy
  end

  def update
  end

  def show
  end

  private

  def job_params
  params require(:job).permit(:name, :con_requirement, :destination, :boat_id, :origin, :cost)
  end

end
